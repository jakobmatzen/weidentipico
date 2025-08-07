import { defineStore } from 'pinia'
import type { BetForm, LoginForm } from '~/types/Form'

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
            }
        }
    }),
    persist: true
})
