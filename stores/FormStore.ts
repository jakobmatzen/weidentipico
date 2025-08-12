import type { BetForm, LoginForm, MarketplaceForm } from '~/types/Form'
import { defineStore } from 'pinia'

interface State {
  loginForm: LoginForm
  betForm: BetForm
  marketplaceForm: MarketplaceForm
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
      amount: 1,
      selectedBetFilterOption: 'deadlineAt',
      selectedSort: 'asc'
    },
    marketplaceForm: {
      service: '',
      date: new Date(),
      time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      },
      price: 0,
      selectedMarketplaceFilterOption: 'deadlineAt',
      selectedMarketplaceSort: 'asc'
    }
  }),
  persist: true
})
