import type { BetForm, LoginForm } from '~/types/Form'
import { defineStore } from 'pinia'

interface State {
  loginForm: LoginForm
  betForm: BetForm
}

export const useFormStore = defineStore('formStore', {
  state: (): State => ({
    loginForm: {
      username: '',
      password: ''
    },
    betForm: {
      title: '',
      optionCount: 2,
      options: [],
      date: new Date(),
      time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      },
      amount: 1
    }
  }),
  persist: true
})
