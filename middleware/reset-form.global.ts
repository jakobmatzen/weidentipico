export default defineNuxtRouteMiddleware(() => {
    useFormStore().$reset()
})
