import { z } from 'zod'
import { Bet } from '~/models/Bet'
import { BetEntry } from '~/models/BetEntry'
import { publicProcedure, router } from '../init'

export const betRouter = router({
  getAllBets: publicProcedure.query(async ({ ctx }) => {
    try {
      return ctx.prisma.bets.findMany({
        orderBy: {
          deadlineAt: 'asc'
        },
        include: {
          betOptions: {
            include: {
              betEntries: true
            }
          }
        }
      })
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
        await ctx.prisma.$transaction(async (prisma) => {
          const bet = await prisma.bets.create({
            data: {
              description: input.bet.description,
              createdAt: input.bet.createdAt,
              deadlineAt: input.bet.deadlineAt,
              status: input.bet.status,
              participants: input.bet.participants,
              amount: input.bet.amount
            }
          })
          await prisma.betOptions.createMany({
            data: input.betOptions.map((option: string) => ({
              betId: bet.id,
              description: option,
              votes: 0,
              amount: 0
            }))
          })
        })
      }
      catch (error) {
        throw new Error('Fehler beim Erstellen der Wette.')
      }
    }),
  placeBet: publicProcedure
    .input(z.object({
      betId: z.number(),
      betEntry: BetEntry.getZodObject(),
      amount: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.$transaction(async (prisma) => {
          await prisma.betEntries.create({
            data: {
              optionId: input.betEntry.optionId,
              userId: input.betEntry.userId,
              amount: input.amount
            }
          })
          await prisma.bets.update({
            where: {
              id: input.betId
            },
            data: {
              participants: {
                increment: 1
              },
              amount: {
                increment: input.amount
              }
            }
          })
          await prisma.betOptions.update({
            where: {
              id: input.betEntry.optionId
            },
            data: {
              amount: {
                increment: input.amount
              },
              votes: {
                increment: 1
              }
            }
          })
        })
      }
      catch (error) {
        throw new Error('Fehler beim Erstellen der Wette.')
      }
    })
})
