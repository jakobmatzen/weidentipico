import App from '@/app.vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

export default defineNuxtPlugin(() => {
    const app = createApp(App)
    const pinia = createPinia()
    app.use(pinia)
})
