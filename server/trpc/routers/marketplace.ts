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
    })
})
