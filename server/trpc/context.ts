import { PrismaClient } from '../../generated/prisma'

let prisma: PrismaClient

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export function createContext() {
    if (!prisma) {
        prisma = new PrismaClient()
    }
    return { prisma }
}

export type Context = Awaited<ReturnType<typeof createContext>>
