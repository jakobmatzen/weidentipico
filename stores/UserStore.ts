import { defineStore } from 'pinia'
import { User } from '~/models/User'

interface State {
    users: User[]
    user: User | undefined
    loading: boolean
}

export const useUserStore = defineStore('userStore', {
    state: (): State => ({
        users: [],
        user: undefined,
        loading: false
    }),
    actions: {
        async fetchData() {
            this.loading = true
            try {
                const { $trpc } = useNuxtApp()
                const data = await $trpc.users.getUsers.query()
                if (data) {
                    this.users = data.map((raw) => User.parseFromDbData(raw))
                }
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
