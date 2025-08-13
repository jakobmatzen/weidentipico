import { asc, eq } from 'drizzle-orm'
import { z } from 'zod'
import { betEntries, betOptions, bets, userWallets } from '~/drizzle/schema'
import { Bet } from '~/models/Bet'
import { BetEntry } from '~/models/BetEntry'
import { publicProcedure, router } from '../init'

export const betRouter = router({
  getAllBets: publicProcedure
    .query(async ({ ctx }) => {
      try {
        const allBets = await ctx.db.select().from(bets).orderBy(asc(bets.deadlineAt))

        const betsWithOptions = await Promise.all(
          allBets.map(async (bet) => {
            const options = await ctx.db
              .select()
              .from(betOptions)
              .where(eq(betOptions.betId, bet.id))
              .orderBy(asc(betOptions.id))

            const optionsWithEntries = await Promise.all(
              options.map(async (option) => {
                const entries = await ctx.db
                  .select()
                  .from(betEntries)
                  .where(eq(betEntries.optionId, option.id))
                return { ...option, betEntries: entries }
              })
            )

            return { ...bet, betOptions: optionsWithEntries }
          })
        )

        return betsWithOptions
      }
      catch (error) {
        console.error(`Fehler beim Laden der Wetten: ${error}`)
        throw new Error('Die Wetten konnten nicht geladen werden.')
      }
    }),
  createBet: publicProcedure
    .input(z.object({
      bet: Bet.getZodObject(),
      betOptions: z.array(z.string())
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const [bet] = await ctx.db.insert(bets).values({
          description: input.bet.description,
          createdAt: input.bet.createdAt.toISOString(),
          deadlineAt: input.bet.deadlineAt.toISOString(),
          status: input.bet.status,
          participants: input.bet.participants,
          amount: input.bet.amount
        }).returning()

        await ctx.db.insert(betOptions).values(
          input.betOptions.map((option: string) => ({
            betId: bet.id,
            description: option,
            quote: 0,
            amount: 0,
            isWinner: false,
          }))
        )
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Erstellen der Wette.')
      }
    }),
  placeBet: publicProcedure
    .input(z.object({
      betId: z.number(),
      betEntry: BetEntry.getZodObject(),
      amount: z.number(),
      quote: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        // Get current wallet balance
        const [currentWallet] = await ctx.db
          .select()
          .from(userWallets)
          .where(eq(userWallets.id, input.betEntry.userId))

        if (!currentWallet) {
          throw new Error('Wallet nicht gefunden.')
        }

        // Update user wallet
        await ctx.db
          .update(userWallets)
          .set({ balance: currentWallet.balance - input.amount })
          .where(eq(userWallets.id, input.betEntry.userId))

        // Create bet entry
        await ctx.db.insert(betEntries).values({
          optionId: input.betEntry.optionId,
          userId: input.betEntry.userId,
          amount: input.amount
        })

        // Get current bet data
        const [currentBet] = await ctx.db
          .select()
          .from(bets)
          .where(eq(bets.id, input.betId))

        if (!currentBet) {
          throw new Error('Wette nicht gefunden.')
        }

        // Update bet
        await ctx.db
          .update(bets)
          .set({
            participants: currentBet.participants + 1,
            amount: currentBet.amount + input.amount
          })
          .where(eq(bets.id, input.betId))

        // Get updated bet for calculations
        const [bet] = await ctx.db
          .select()
          .from(bets)
          .where(eq(bets.id, input.betId))

        // Get all bet options
        const betOptionsList = await ctx.db
          .select()
          .from(betOptions)
          .where(eq(betOptions.betId, input.betId))

        // Update bet options
        const updatePromises = betOptionsList.map(async (option) => {
          if (option.id === input.betEntry.optionId) {
            return ctx.db
              .update(betOptions)
              .set({
                amount: option.amount + input.amount,
                quote: input.quote
              })
              .where(eq(betOptions.id, option.id))
          }
          else if (option.amount > 0) {
            const newQuote = bet.amount / option.amount
            return ctx.db
              .update(betOptions)
              .set({ quote: newQuote })
              .where(eq(betOptions.id, option.id))
          }
          else {
            return null
          }
        })

        await Promise.all(updatePromises.filter(Boolean))
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Platzieren der Wette.')
      }
    }),
  closeBet: publicProcedure
    .input(z.object({
      betId: z.number(),
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.db
          .update(bets)
          .set({
            deadlineAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
          })
          .where(eq(bets.id, input.betId))
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Schließen der Wette.')
      }
    }),
  payout: publicProcedure
    .input(z.object({
      bet: Bet.getZodObject(),
      optionId: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        // Update bet status
        if (!input.bet.id) {
          throw new Error('Bet ID ist erforderlich.')
        }
        await ctx.db
          .update(bets)
          .set({ status: 2 })
          .where(eq(bets.id, input.bet.id))

        // Update winning option
        await ctx.db
          .update(betOptions)
          .set({ isWinner: true })
          .where(eq(betOptions.id, input.optionId))

        // Get bet entries for the winning option
        const betEntriesList = await ctx.db
          .select()
          .from(betEntries)
          .where(eq(betEntries.optionId, input.optionId))

        // Get the winning option to get the quote
        const [winningOption] = await ctx.db
          .select()
          .from(betOptions)
          .where(eq(betOptions.id, input.optionId))

        if (!winningOption) {
          throw new Error('Gewinnoption nicht gefunden.')
        }

        // Update user wallets for winners
        for (const entry of betEntriesList) {
          if (entry.userId) {
            // Get current wallet balance
            const [currentWallet] = await ctx.db
              .select()
              .from(userWallets)
              .where(eq(userWallets.id, entry.userId))

            if (currentWallet) {
              const winnings = entry.amount * winningOption.quote
              await ctx.db
                .update(userWallets)
                .set({
                  balance: currentWallet.balance + winnings
                })
                .where(eq(userWallets.id, entry.userId))
            }
          }
        }
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Ausschütten des Gewinns.')
      }
    }),
})
