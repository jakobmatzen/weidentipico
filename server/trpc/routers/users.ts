import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { users, userWallets } from '~/drizzle/schema'
import { publicProcedure, router } from '../init'

export const userRouter = router({
  getUsers: publicProcedure
    .query(async ({ ctx }) => {
      const allUsers = await ctx.db.select().from(users)

      const usersWithWallets = await Promise.all(
        allUsers.map(async (user) => {
          const wallet = await ctx.db
            .select()
            .from(userWallets)
            .where(eq(userWallets.id, user.id))
            .then(rows => rows[0])

          return { ...user, userWallets: wallet }
        })
      )

      return usersWithWallets
    }),
  getUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.db
        .select()
        .from(users)
        .where(eq(users.id, input.id))
        .then(rows => rows[0])

      if (!user) { return null }

      const wallet = await ctx.db
        .select()
        .from(userWallets)
        .where(eq(userWallets.id, user.id))
        .then(rows => rows[0])

      return { ...user, userWallets: wallet }
    })
})
