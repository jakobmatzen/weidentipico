export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  colorMode: {
    preference: 'dark'
  },
  build: {
    transpile: ['trpc-nuxt']
  },
  compatibilityDate: '1999-03-01',
  devtools: { enabled: true },
})
