<script setup lang="ts">
definePageMeta({
    layout: 'login'
})

const { loginForm } = storeToRefs(useFormStore())

async function login() {
    try {
        const error = await useUserStore().login(loginForm.value.username, loginForm.value.password)
        if (error) {
            throw error
        }
        useNotificationStore().addSuccess(`Willkommen, ${useUserStore().user?.firstName}!`, 'Login')
        navigateTo('/')
        useFormStore().$reset()
    } catch (error) {
        return
    }
}
</script>

<template>
    <div class="flex flex-col h-full w-full items-center justify-center" @keydown.enter="login()">
        <UFormField label="Benutzername">
            <UInput v-model="loginForm.username" />
        </UFormField>
        <UFormField label="Passwort" class="mt-2">
            <UInput v-model="loginForm.password" type="password" />
        </UFormField>
        <UButton label="Login" class="mt-4" @click="login()" />
    </div>
</template>
