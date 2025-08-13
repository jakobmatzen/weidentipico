import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/app.vue'

export default defineNuxtPlugin(() => {
  const app = createApp(App)
  const pinia = createPinia()
  app.use(pinia)
})
