import { Pool } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-serverless'

import * as schema from '../drizzle/schema'

export function createContext() {
  // Neon is designed for serverless/edge environments
  const pool = new Pool({ connectionString: process.env.SERVERLESS_URL })
  const db = drizzle({ client: pool, schema })
  return { db }
}

export type Context = Awaited<ReturnType<typeof createContext>>
