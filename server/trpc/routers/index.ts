import { router } from '../init'
import { userRouter } from './users'
import { betRouter } from './bets'

export const appRouter = router({
    bets: betRouter,
    users: userRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
