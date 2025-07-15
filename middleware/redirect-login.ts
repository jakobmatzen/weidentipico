export default defineNuxtRouteMiddleware(() => {
    if (!useUserStore().user) {
        return navigateTo('/login')
    }
})
