import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../drizzle/schema'

export function createContext() {
  const client = postgres(process.env.SERVERLESS_URL!)

  const db = drizzle(client, { schema })
  return { db }
}

export type Context = Awaited<ReturnType<typeof createContext>>
