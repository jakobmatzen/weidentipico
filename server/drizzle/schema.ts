import { boolean, foreignKey, integer, pgTable, real, text, timestamp } from 'drizzle-orm/pg-core'

export const status = pgTable('status', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'status_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
  description: text().notNull(),
})

export const roles = pgTable('roles', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'roles_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
  description: text().notNull(),
})

export const users = pgTable('users', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'users_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
  name: text().notNull(),
  username: text().notNull(),
  password: text().notNull(),
  role: integer(),
}, table => [
  foreignKey({
    columns: [table.role],
    foreignColumns: [roles.id],
    name: 'users_role_fkey'
  }),
])

export const userWallets = pgTable('userWallets', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'userWallets_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647 }),
  balance: integer().default(0).notNull(),
}, table => [
  foreignKey({
    columns: [table.id],
    foreignColumns: [users.id],
    name: 'userWallets_id_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
])

export const bets = pgTable('bets', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'bets_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
  description: text().notNull(),
  createdAt: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  deadlineAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
  status: integer(),
  participants: integer().default(0).notNull(),
  amount: integer().default(0).notNull(),
}, table => [
  foreignKey({
    columns: [table.status],
    foreignColumns: [status.id],
    name: 'bets_status_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
])

export const betOptions = pgTable('betOptions', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'betDetails_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647 }),
  betId: integer(),
  description: text().notNull(),
  amount: integer().notNull(),
  isWinner: boolean().default(false).notNull(),
  quote: real().notNull(),
}, table => [
  foreignKey({
    columns: [table.betId],
    foreignColumns: [bets.id],
    name: 'betDetails_betId_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
])

export const betEntries = pgTable('betEntries', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'betEntries_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647 }),
  optionId: integer(),
  userId: integer(),
  amount: integer().notNull(),
  isWinner: boolean().default(false).notNull(),
}, table => [
  foreignKey({
    columns: [table.optionId],
    foreignColumns: [betOptions.id],
    name: 'betEntries_optionId_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
  foreignKey({
    columns: [table.userId],
    foreignColumns: [users.id],
    name: 'betEntries_userId_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
])

export const trades = pgTable('trades', {
  id: integer().primaryKey().generatedByDefaultAsIdentity({ name: 'trades_id_seq', startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
  supplierId: integer(),
  customerId: integer(),
  service: text().notNull(),
  createdAt: timestamp({ withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  deadlineAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
  confirmedAt: timestamp({ withTimezone: true, mode: 'string' }),
  price: integer().notNull(),
  acceptedAt: timestamp({ withTimezone: true, mode: 'string' }),
}, table => [
  foreignKey({
    columns: [table.customerId],
    foreignColumns: [users.id],
    name: 'trades_customerId_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
  foreignKey({
    columns: [table.supplierId],
    foreignColumns: [users.id],
    name: 'trades_supplierId_fkey'
  }).onUpdate('cascade').onDelete('restrict'),
])
