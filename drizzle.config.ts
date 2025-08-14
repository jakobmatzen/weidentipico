import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './server/drizzle',
  schema: './server/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DIRECT_URL!,
  },
})
