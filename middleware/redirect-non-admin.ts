export default defineNuxtRouteMiddleware(() => {
  if (useUserStore().user?.role !== 1) {
    return navigateTo('/')
  }
})
