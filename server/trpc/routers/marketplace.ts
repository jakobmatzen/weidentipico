import { eq } from 'drizzle-orm'
import z from 'zod'
import { trades, users, userWallets } from '~/drizzle/schema'
import { Trade } from '~/models/Trade'
import { publicProcedure, router } from '../init'

export const marketplaceRouter = router({
  getAllTrades: publicProcedure
    .query(async ({ ctx }) => {
      const allTrades = await ctx.db.select().from(trades)

      const tradesWithUsers = await Promise.all(
        allTrades.map(async (trade) => {
          const supplier = trade.supplierId
            ? await ctx.db
                .select()
                .from(users)
                .where(eq(users.id, trade.supplierId))
                .then(rows => rows[0])
            : null

          const customer = trade.customerId
            ? await ctx.db
                .select()
                .from(users)
                .where(eq(users.id, trade.customerId))
                .then(rows => rows[0])
            : null

          return {
            ...trade,
            users_trades_supplierIdTousers: supplier,
            users_trades_customerIdTousers: customer
          }
        })
      )

      return tradesWithUsers
    }),
  createTrade: publicProcedure
    .input(z.object({ trade: Trade.getZodObject() }))
    .mutation(async ({ ctx, input }) => {
      try {
        const [trade] = await ctx.db.insert(trades).values({
          ...input.trade,
          createdAt: input.trade.createdAt.toISOString(),
          deadlineAt: input.trade.deadlineAt.toISOString(),
          confirmedAt: input.trade.confirmedAt?.toISOString(),
          acceptedAt: input.trade.acceptedAt?.toISOString()
        }).returning()
        return trade
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Erstellen des Angebots.')
      }
    }),
  updateTrade: publicProcedure
    .input(z.object({
      trade: Trade.getZodObject()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        if (!input.trade.id) {
          throw new Error('Trade ID ist erforderlich.')
        }
        const [trade] = await ctx.db
          .update(trades)
          .set({
            service: input.trade.service,
            price: input.trade.price,
            deadlineAt: input.trade.deadlineAt.toISOString()
          })
          .where(eq(trades.id, input.trade.id))
          .returning()

        return trade
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Aktualisieren des Angebots.')
      }
    }),
  acceptTrade: publicProcedure
    .input(z.object({
      tradeId: z.number(),
      userId: z.number(),
      acceptedAt: z.date()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const trade = await ctx.db
          .select()
          .from(trades)
          .where(eq(trades.id, input.tradeId))
          .then(rows => rows[0])

        if (trade?.acceptedAt) {
          throw new Error('Das Angebot wurde bereits von einer anderen Person angenommen. Bitte lade die Seite neu.')
        }

        const [updatedTrade] = await ctx.db
          .update(trades)
          .set({
            supplierId: trade?.supplierId ? trade.supplierId : input.userId,
            customerId: trade?.customerId ? trade.customerId : input.userId,
            acceptedAt: input.acceptedAt.toISOString()
          })
          .where(eq(trades.id, input.tradeId))
          .returning()

        if (updatedTrade && updatedTrade.customerId) {
          // Get current wallet balance
          const [currentWallet] = await ctx.db
            .select()
            .from(userWallets)
            .where(eq(userWallets.id, updatedTrade.customerId))

          if (currentWallet) {
            await ctx.db
              .update(userWallets)
              .set({
                balance: currentWallet.balance - updatedTrade.price
              })
              .where(eq(userWallets.id, updatedTrade.customerId))
          }
        }
      }
      catch (error) {
        console.log(error)
        throw new Error(error instanceof Error ? error.message : 'Unknown error')
      }
    }),
  confirmTrade: publicProcedure
    .input(z.object({
      tradeId: z.number(),
      confirmedAt: z.date()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const [updatedTrade] = await ctx.db
          .update(trades)
          .set({
            confirmedAt: input.confirmedAt.toISOString()
          })
          .where(eq(trades.id, input.tradeId))
          .returning()

        if (updatedTrade && updatedTrade.supplierId) {
          // Get current wallet balance
          const [currentWallet] = await ctx.db
            .select()
            .from(userWallets)
            .where(eq(userWallets.id, updatedTrade.supplierId))

          if (currentWallet) {
            await ctx.db
              .update(userWallets)
              .set({
                balance: currentWallet.balance + updatedTrade.price
              })
              .where(eq(userWallets.id, updatedTrade.supplierId))
          }
        }
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Bestätigen der Transaktion.')
      }
    })
})
