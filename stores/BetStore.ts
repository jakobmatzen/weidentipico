import type { BetEntry } from '~/models/BetEntry'
import { defineStore } from 'pinia'
import { Bet } from '~/models/Bet'

interface State {
  loading: boolean
  bets: Bet[]
}

export const useBetStore = defineStore('betStore', {
  state: (): State => ({
    loading: false,
    bets: []
  }),
  getters: {
    getBets: (state) => {
      const userId = useUserStore().user?.id
      return state.bets.filter(bet => {
        if (bet.deadlineAt < new Date()) {
          return false
        }
        if (userId && bet.betOptions) {
          const userHasBet = bet.betOptions.some(option => 
            option.betEntries?.some(entry => entry.userId === userId)
          )
          if (userHasBet) {
            return false
          }
        }
        return true
      })
    }
  },
  actions: {
    async fetchData() {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        const data = await $trpc.bets.getAllBets.query()
        if (data) {
          this.bets = data.map((bet: any) => Bet.parseFromDbData(bet))
        }
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
      }
      finally {
        this.loading = false
      }
    },
    async createBet(bet: Bet, betOptions: string[]) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.bets.createBet.mutate({
          bet: bet.toJson(),
          betOptions
        })
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    },
    async placeBet(betId: number, betEntry: BetEntry, amount: number) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.bets.placeBet.mutate({
          betId,
          betEntry: betEntry.toJson(),
          amount
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
