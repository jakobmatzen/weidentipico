import { defineStore } from 'pinia'
import { useUserStore } from './UserStore'

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
