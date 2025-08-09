import { z } from 'zod'
import { publicProcedure, router } from '../init'

export const userRouter = router({
  getUsers: publicProcedure
    .query(async ({ ctx }) => {
      return ctx.prisma.users.findMany({
        include: {
          userWallets: true
        }
      })
    }),
  getUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.users.findUnique({
        where: { id: input.id },
        include: {
          userWallets: true
        }
      })
    })
})
