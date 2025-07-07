export default defineNuxtConfig({
  compatibilityDate: '1999-03-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  build: {
    transpile: ['trpc-nuxt']
  }
})
