import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../drizzle/schema'

export function createContext() {
  // Create fresh connection per request (correct for edge runtime)
  const client = postgres(process.env.SERVERLESS_URL!, {
    max: 1, // Single connection
    idle_timeout: 5, // Short timeout
    connect_timeout: 5, // Quick connect or fail
    ssl: false,
    prepare: false,
    // Automatically close connection after use
    onnotice: () => {},
    transform: { undefined: null }
  })

  const db = drizzle(client, { schema })
  return { db }
}

export type Context = Awaited<ReturnType<typeof createContext>>
