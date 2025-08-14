import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../drizzle/schema'

export function createContext() {
  // Create fresh connection per request (correct for edge runtime)
  const client = postgres(process.env.DIRECT_URL!)

  const db = drizzle(client, { schema })
  return { db }
}

export type Context = Awaited<ReturnType<typeof createContext>>
