import { z } from 'zod'
import { publicProcedure, router } from '../init'
import { Bet } from '~/models/Bet'

export const betRouter = router({
    getAllBets: publicProcedure.query(async ({ ctx }) => {
        try {
            return ctx.prisma.bets.findMany({
                orderBy: {
                    createdAt: 'desc'
                },
                include: {
                    betOptions: {
                        include: {
                            betEntries: true
                        }
                    }
                }
            })
        }
        catch (error) {
            console.error(`Fehler beim Laden der Wetten: ${error}`)
            throw new Error('Die Wetten konnten nicht geladen werden.')
        }
    }),
    createBet: publicProcedure
        .input(z.object({
            bet: Bet.getZodObject(),
            betOptions: z.array(z.string())
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.prisma.$transaction(async (prisma) => {
                    const bet = await prisma.bets.create({
                        data: {
                            description: input.bet.description,
                            createdAt: input.bet.createdAt,
                            deadlineAt: input.bet.deadlineAt,
                            status: input.bet.status
                        }
                    })
                    await prisma.betOptions.createMany({
                        data: input.betOptions.map((option: string) => ({
                            betId: bet.id,
                            description: option,
                            weight: 1 / input.betOptions.length,
                            amount: 0
                        }))
                    })
                })
            } catch (error) {
                throw new Error('Fehler beim Erstellen der Wette.')
            }
        })
})
