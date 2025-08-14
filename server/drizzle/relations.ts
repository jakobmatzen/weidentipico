import { relations } from 'drizzle-orm/relations'
import { betEntries, betOptions, bets, roles, status, trades, users, userWallets } from './schema'

export const betsRelations = relations(bets, ({ one, many }) => ({
  status: one(status, {
    fields: [bets.status],
    references: [status.id]
  }),
  betOptions: many(betOptions),
}))

export const statusRelations = relations(status, ({ many }) => ({
  bets: many(bets),
}))

export const betEntriesRelations = relations(betEntries, ({ one }) => ({
  betOption: one(betOptions, {
    fields: [betEntries.optionId],
    references: [betOptions.id]
  }),
  user: one(users, {
    fields: [betEntries.userId],
    references: [users.id]
  }),
}))

export const betOptionsRelations = relations(betOptions, ({ one, many }) => ({
  betEntries: many(betEntries),
  bet: one(bets, {
    fields: [betOptions.betId],
    references: [bets.id]
  }),
}))

export const usersRelations = relations(users, ({ one, many }) => ({
  betEntries: many(betEntries),
  trades_customerId: many(trades, {
    relationName: 'trades_customerId_users_id'
  }),
  trades_supplierId: many(trades, {
    relationName: 'trades_supplierId_users_id'
  }),
  role: one(roles, {
    fields: [users.role],
    references: [roles.id]
  }),
  userWallets: many(userWallets),
}))

export const tradesRelations = relations(trades, ({ one }) => ({
  user_customerId: one(users, {
    fields: [trades.customerId],
    references: [users.id],
    relationName: 'trades_customerId_users_id'
  }),
  user_supplierId: one(users, {
    fields: [trades.supplierId],
    references: [users.id],
    relationName: 'trades_supplierId_users_id'
  }),
}))

export const rolesRelations = relations(roles, ({ many }) => ({
  users: many(users),
}))

export const userWalletsRelations = relations(userWallets, ({ one }) => ({
  user: one(users, {
    fields: [userWallets.id],
    references: [users.id]
  }),
}))
