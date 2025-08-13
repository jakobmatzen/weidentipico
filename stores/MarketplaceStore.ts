import { defineStore } from 'pinia'
import { Trade } from '~/models/Trade'

interface State {
  loading: boolean
  trades: Trade[]
}

export const useMarketplaceStore = defineStore('marketplaceStore', {
  state: (): State => ({
    loading: false,
    trades: []
  }),
  getters: {
    getTradeOffers: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      const filteredTrades = state.trades.filter(trade => trade.supplierId !== null && trade.customerId === null && trade.supplierId !== userId && trade.deadlineAt > new Date())
      filteredTrades.sort((a, b) => {
        const sortDirection = formStore.marketplaceForm.selectedMarketplaceSort === 'asc' ? 1 : -1
        switch (formStore.marketplaceForm.selectedMarketplaceFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'price':
            return sortDirection * (a.price - b.price)
          default:
            return 0
        }
      })
      return filteredTrades
    },
    getTradeRequests: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      const filteredTrades = state.trades.filter(trade => trade.customerId !== null && trade.supplierId === null && trade.customerId !== userId && trade.deadlineAt > new Date())
      filteredTrades.sort((a, b) => {
        const sortDirection = formStore.marketplaceForm.selectedMarketplaceSort === 'asc' ? 1 : -1
        switch (formStore.marketplaceForm.selectedMarketplaceFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'price':
            return sortDirection * (a.price - b.price)
          default:
            return 0
        }
      })
      return filteredTrades
    },
    getUserTradesOpen: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      if (!userId) {
        return []
      }
      const filteredTrades = state.trades.filter(trade =>
        (trade.supplierId === userId || trade.customerId === userId)
        && trade.acceptedAt === null
        && trade.confirmedAt === null
      )
      filteredTrades.sort((a, b) => {
        const sortDirection = formStore.marketplaceForm.selectedMarketplaceSort === 'asc' ? 1 : -1
        switch (formStore.marketplaceForm.selectedMarketplaceFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'price':
            return sortDirection * (a.price - b.price)
          default:
            return 0
        }
      })
      return filteredTrades
    },
    getUserTradesAccepted: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      if (!userId) {
        return []
      }
      const filteredTrades = state.trades.filter(trade =>
        (trade.supplierId === userId || trade.customerId === userId)
        && trade.acceptedAt !== null
        && trade.confirmedAt === null
      )
      filteredTrades.sort((a, b) => {
        const sortDirection = formStore.marketplaceForm.selectedMarketplaceSort === 'asc' ? 1 : -1
        switch (formStore.marketplaceForm.selectedMarketplaceFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'price':
            return sortDirection * (a.price - b.price)
          default:
            return 0
        }
      })
      return filteredTrades
    },
    getUserTradesConfirmed: (state) => {
      const userId = useUserStore().user?.id
      const formStore = useFormStore()
      if (!userId) {
        return []
      }
      const filteredTrades = state.trades.filter(trade =>
        (trade.supplierId === userId || trade.customerId === userId)
        && trade.acceptedAt !== null
        && trade.confirmedAt !== null
      )
      filteredTrades.sort((a, b) => {
        const sortDirection = formStore.marketplaceForm.selectedMarketplaceSort === 'asc' ? 1 : -1
        switch (formStore.marketplaceForm.selectedMarketplaceFilterOption) {
          case 'deadlineAt':
            return sortDirection * (a.deadlineAt.getTime() - b.deadlineAt.getTime())
          case 'createdAt':
            return sortDirection * (a.createdAt.getTime() - b.createdAt.getTime())
          case 'price':
            return sortDirection * (a.price - b.price)
          default:
            return 0
        }
      })
      return filteredTrades
    }
  },
  actions: {
    async fetchData() {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        const data = await $trpc.marketplace.getAllTrades.query()
        if (data) {
          this.trades = data.map(raw => Trade.parseFromDbData(raw))
        }
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
      }
      finally {
        this.loading = false
      }
    },
    async createTrade(trade: Trade) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.marketplace.createTrade.mutate({ trade: trade.toJson() })
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    },
    async updateTrade(trade: Trade) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.marketplace.updateTrade.mutate({ trade: trade.toJson() })
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    },
    async acceptTrade(tradeId: number, userId: number, acceptedAt: Date) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.marketplace.acceptTrade.mutate({ tradeId, userId, acceptedAt })
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    },
    async confirmTrade(tradeId: number, confirmedAt: Date) {
      this.loading = true
      try {
        const { $trpc } = useNuxtApp()
        await $trpc.marketplace.confirmTrade.mutate({ tradeId, confirmedAt })
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
