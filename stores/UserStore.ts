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
          this.users = data.map(raw => User.parseFromDbData(raw))
        }
        const user = this.users.find((user: User) => user.id === this.user?.id)
        if (user) {
          this.user = user
        }
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
      }
      finally {
        this.loading = false
      }
    },
    async login(username: string, password: string) {
      this.loading = true
      try {
        const user = this.users.find((user: User) => user.username === username && user.password === password)
        if (user) {
          this.user = user
        }
        else {
          throw new Error('Benutzername oder Passwort falsch.')
        }
        this.loading = false
      }
      catch (error) {
        useNotificationStore().addError(useNotificationStore().getErrorMessage(error))
        this.loading = false
        return error
      }
    }
  },
  persist: true
})
