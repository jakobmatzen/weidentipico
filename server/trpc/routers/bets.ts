import { z } from 'zod'
import { publicProcedure, router } from '../init'
import { Bet } from '~/models/Bet'

export const betRouter = router({
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
                            createdAt: new Date(new Date(input.bet.createdAt).getTime() + 2 * 60 * 60 * 1000),
                            deadlineAt: new Date(new Date(input.bet.deadlineAt).getTime() + 2 * 60 * 60 * 1000),
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
