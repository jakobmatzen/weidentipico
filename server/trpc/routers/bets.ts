import { z } from 'zod'
import { Bet } from '~/models/Bet'
import { BetEntry } from '~/models/BetEntry'
import { publicProcedure, router } from '../init'

export const betRouter = router({
  getAllBets: publicProcedure
    .query(async ({ ctx }) => {
      try {
        return ctx.prisma.bets.findMany({
          orderBy: {
            deadlineAt: 'asc'
          },
          include: {
            betOptions: {
              orderBy: {
                id: 'asc'
              },
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
              quote: 0,
              amount: 0,
              isWinner: false,
            }))
          })
        })
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
        await ctx.prisma.$transaction(async (prisma) => {
          await prisma.userWallets.update({
            where: {
              id: input.betEntry.userId
            },
            data: {
              balance: {
                decrement: input.amount
              }
            }
          })
          await prisma.betEntries.create({
            data: {
              optionId: input.betEntry.optionId,
              userId: input.betEntry.userId,
              amount: input.amount
            }
          })
          const bet = await prisma.bets.update({
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
          const betOptions = await prisma.betOptions.findMany({
            where: {
              betId: input.betId
            }
          })
          const updatePromises = betOptions.map((option) => {
            if (option.id === input.betEntry.optionId) {
              return prisma.betOptions.update({
                where: {
                  id: option.id
                },
                data: {
                  amount: {
                    increment: input.amount
                  },
                  quote: input.quote
                }
              })
            }
            else if (option.amount > 0) {
              const newQuote = bet.amount / option.amount
              return prisma.betOptions.update({
                where: {
                  id: option.id
                },
                data: {
                  quote: newQuote
                }
              })
            }
            else {
              return null
            }
          })
          await Promise.all(updatePromises)
        })
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
        await ctx.prisma.bets.update({
          where: {
            id: input.betId
          },
          data: {
            deadlineAt: new Date(Date.now() + 2 * 60 * 60 * 1000),
          }
        })
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
        await ctx.prisma.$transaction(async (prisma) => {
          await prisma.bets.update({
            where: {
              id: input.bet.id
            },
            data: {
              status: 2
            }
          })
          await prisma.betOptions.update({
            where: {
              id: input.optionId
            },
            data: {
              isWinner: true
            }
          })
          const betEntries = await prisma.betEntries.findMany({
            where: {
              optionId: input.optionId
            }
          })
          for (const entry of betEntries) {
            await prisma.userWallets.update({
              where: {
                id: entry.userId!
              },
              data: {
                balance: {
                  increment: entry.amount * input.bet.betOptions.find(option => option.id === input.optionId)!.quote
                }
              }
            })
          }
        })
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Ausschütten des Gewinns.')
      }
    }),
})
