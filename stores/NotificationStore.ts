import { defineStore } from 'pinia'

interface State {
  notificationList: {
    title: string
    message: string
    color: any
  }[]
}

export const useNotificationStore = defineStore('notificationStore', {
  state: (): State => ({
    notificationList: [],
  }),
  actions: {
    addSuccess(message: string, title: string = 'Erfolg') {
      this.notificationList.push({
        title,
        message,
        color: 'success'
      })
    },
    addWarning(message: string, title: string = 'Warnung') {
      this.notificationList.push({
        title,
        message,
        color: 'warning'
      })
    },
    addInfo(message: string, title: string = 'Info') {
      this.notificationList.push({
        title,
        message,
        color: 'primary'
      })
    },
    addError(message: string, title: string = 'Fehler') {
      this.notificationList.push({
        title,
        message,
        color: 'error'
      })
    },
    getErrorMessage(error: unknown) {
      if (error instanceof Error) { return error.message }
      return String(error)
    }
  }
})
