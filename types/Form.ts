export interface LoginForm {
    username: string
    password: string
}

export interface BetForm {
    title: string
    optionCount: number
    options: string[]
    time: {
        hours: number
        minutes: number
    }
}
