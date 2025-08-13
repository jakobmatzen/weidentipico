import z from 'zod'
import { Trade } from '~/models/Trade'
import { publicProcedure, router } from '../init'

export const marketplaceRouter = router({
  getAllTrades: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.trades.findMany({
        include: {
          users_trades_supplierIdTousers: true,
          users_trades_customerIdTousers: true
        }
      })
    }),
  createTrade: publicProcedure
    .input(z.object({ trade: Trade.getZodObject() }))
    .mutation(async ({ ctx, input }) => {
      try {
        return ctx.prisma.trades.create({ data: input.trade })
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
        return ctx.prisma.trades.update({
          where: {
            id: input.trade.id
          },
          data: {
            service: input.trade.service,
            price: input.trade.price,
            deadlineAt: input.trade.deadlineAt
          }
        })
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
        await ctx.prisma.$transaction(async (prisma) => {
          const trade = await prisma.trades.findUnique({
            where: {
              id: input.tradeId
            }
          })
          if (trade?.acceptedAt) {
            throw new Error('Das Angebot wurde bereits von einer anderen Person angenommen. Bitte lade die Seite neu.')
          }
          const updatedTrade = await prisma.trades.update({
            where: {
              id: input.tradeId
            },
            data: {
              supplierId: trade?.supplierId ? trade.supplierId : input.userId,
              customerId: trade?.customerId ? trade.customerId : input.userId,
              acceptedAt: input.acceptedAt
            }
          })
          if (updatedTrade) {
            await prisma.userWallets.update({
              where: {
                id: updatedTrade.customerId!
              },
              data: {
                balance: {
                  decrement: updatedTrade.price
                }
              }
            })
          }
        })
      }
      catch (error) {
        console.log(error)
        throw new Error(useNotificationStore().getErrorMessage(error))
      }
    }),
  confirmTrade: publicProcedure
    .input(z.object({
      tradeId: z.number(),
      confirmedAt: z.date()
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.$transaction(async (prisma) => {
          const updatedTrade = await prisma.trades.update({
            where: {
              id: input.tradeId
            },
            data: {
              confirmedAt: input.confirmedAt
            }
          })
          if (updatedTrade) {
            await prisma.userWallets.update({
              where: {
                id: updatedTrade.supplierId!
              },
              data: {
                balance: {
                  increment: updatedTrade.price
                }
              }
            })
          }
        })
      }
      catch (error) {
        console.log(error)
        throw new Error('Fehler beim Bestätigen der Transaktion.')
      }
    })
})
