import { defineStore } from 'pinia'
import { Bet } from '~/models/Bet'

interface State {
    loading: boolean
}

export const useBetStore = defineStore('betStore', {
    state: (): State => ({
        loading: false
    }),
    actions: {
        async createBet(bet: Bet, betOptions: string[]) {
            this.loading = true
            try {
                console.log('bet', bet)
                console.log('betOptions', betOptions)
                const { $trpc } = useNuxtApp()
                await $trpc.bets.createBet.mutate({
                    bet: bet.toJson(),
                    betOptions: betOptions
                })
                this.loading = false
            }
            catch (error) {
                useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
                this.loading = false
                return error
            }
        }
    }
})
