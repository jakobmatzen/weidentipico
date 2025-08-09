import { router } from '../init'
import { betRouter } from './bets'
import { userRouter } from './users'

export const appRouter = router({
  bets: betRouter,
  users: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
