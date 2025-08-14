import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

let db: ReturnType<typeof drizzle>

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export function createContext() {
  if (!db) {
    const client = postgres(process.env.DATABASE_URL!)
    db = drizzle(client)
  }
  return { db }
}

export type Context = Awaited<ReturnType<typeof createContext>>
