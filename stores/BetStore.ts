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
      const formStore = useFormStore()
      const filteredBets = state.bets.filter((bet) => {
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
      filteredBets.sort((a, b) => {
        const sortDirection = formStore.betForm.selectedSort === 'asc' ? 1 : -1
        switch (formStore.betForm.selectedBetFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'amount':
            return sortDirection * (a.amount - b.amount)
          case 'participants':
            return sortDirection * (a.participants - b.participants)
          case 'description':
            return sortDirection * a.description.localeCompare(b.description)
          default:
            return 0
        }
      })
      return filteredBets
    },
    getBetsForAdminOpen: (state) => {
      const formStore = useFormStore()
      const filteredBets = state.bets.filter((bet) => {
        if (bet.deadlineAt > new Date() || bet.status === 2) {
          return false
        }
        return true
      })
      filteredBets.sort((a, b) => {
        const sortDirection = formStore.betForm.selectedSort === 'asc' ? 1 : -1
        switch (formStore.betForm.selectedBetFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'amount':
            return sortDirection * (a.amount - b.amount)
          case 'participants':
            return sortDirection * (a.participants - b.participants)
          case 'description':
            return sortDirection * a.description.localeCompare(b.description)
          default:
            return 0
        }
      })
      return filteredBets
    },
    getBetsForAdminClosed: (state) => {
      const formStore = useFormStore()
      const filteredBets = state.bets.filter((bet) => {
        if (bet.deadlineAt > new Date() || bet.status === 1) {
          return false
        }
        return true
      })
      filteredBets.sort((a, b) => {
        const sortDirection = formStore.betForm.selectedSort === 'asc' ? 1 : -1
        switch (formStore.betForm.selectedBetFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'amount':
            return sortDirection * (a.amount - b.amount)
          case 'participants':
            return sortDirection * (a.participants - b.participants)
          case 'description':
            return sortDirection * a.description.localeCompare(b.description)
          default:
            return 0
        }
      })
      return filteredBets
    },
    getBetsForUserOpen: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      const filteredBets = state.bets.filter((bet) => {
        if (bet.status === 2) {
          return false
        }
        if (userId && bet.betOptions) {
          const userHasBet = bet.betOptions.some(option =>
            option.betEntries?.some(entry => entry.userId === userId)
          )
          if (!userHasBet) {
            return false
          }
        }
        return true
      })
      filteredBets.sort((a, b) => {
        const sortDirection = formStore.betForm.selectedSort === 'asc' ? 1 : -1
        switch (formStore.betForm.selectedBetFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'amount':
            return sortDirection * (a.amount - b.amount)
          case 'participants':
            return sortDirection * (a.participants - b.participants)
          case 'description':
            return sortDirection * a.description.localeCompare(b.description)
          default:
            return 0
        }
      })
      return filteredBets
    },
    getBetsForUserClosed: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      const filteredBets = state.bets.filter((bet) => {
        if (bet.status === 1) {
          return false
        }
        if (userId && bet.betOptions) {
          const userHasBet = bet.betOptions.some(option =>
            option.betEntries?.some(entry => entry.userId === userId)
          )
          if (!userHasBet) {
            return false
          }
        }
        return true
      })
      filteredBets.sort((a, b) => {
        const sortDirection = formStore.betForm.selectedSort === 'asc' ? 1 : -1
        switch (formStore.betForm.selectedBetFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'amount':
            return sortDirection * (a.amount - b.amount)
          case 'participants':
            return sortDirection * (a.participants - b.participants)
          case 'description':
            return sortDirection * a.description.localeCompare(b.description)
          default:
            return 0
        }
      })
      return filteredBets
    }
  },
  actions: {
    async fetchData() {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        const data = await $trpc.bets.getAllBets.query()
        if (data) {
          this.bets = data.map(raw => Bet.parseFromDbData(raw))
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

        console.log(bet.toJson())
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
    async placeBet(betId: number, betEntry: BetEntry, amount: number, quote: number) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.bets.placeBet.mutate({
          betId,
          betEntry: betEntry.toJson(),
          amount,
          quote
        })
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    },
    async closeBet(betId: number) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.bets.closeBet.mutate({ betId })
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    },
    async payout(bet: Bet, optionId: number) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.bets.payout.mutate({ bet: bet.toJson(), optionId })
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
