import { router } from '../init'
import { betRouter } from './bets'
import { marketplaceRouter } from './marketplace'
import { userRouter } from './users'

export const appRouter = router({
  bets: betRouter,
  marketplace: marketplaceRouter,
  users: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
