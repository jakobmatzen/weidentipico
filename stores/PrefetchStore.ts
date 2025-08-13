import { defineStore } from 'pinia'

interface State {
  loading: boolean
}

export const usePrefetchStore = defineStore('prefetchStore', {
  state: (): State => ({
    loading: false
  }),
  actions: {
    async fetchData() {
      this.loading = true
      try {
        await useUserStore().fetchData()
        await useBetStore().fetchData()
        await useMarketplaceStore().fetchData()
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
      }
      finally {
        this.loading = false
      }
    }
  }
})
