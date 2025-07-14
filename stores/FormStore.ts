import { defineStore } from 'pinia'
import type { LoginForm } from '~/types/Form'

interface State {
    loginForm: LoginForm
}

export const useFormStore = defineStore('formStore', {
    state: (): State => ({
        loginForm: {
            username: '',
            password: ''
        }
    }),
    persist: true
})
