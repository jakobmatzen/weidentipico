export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxthub/core',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  piniaPersistedstate: {
    storage: 'localStorage'
  },
  imports: {
    dirs: ['stores']
  },
  colorMode: {
    preference: 'dark'
  },
  build: {
    transpile: ['trpc-nuxt']
  },
  compatibilityDate: '1999-03-01',
  devtools: { enabled: false },
})
