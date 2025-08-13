<script setup lang="ts">
definePageMeta({
  layout: 'login',
  middleware: 'redirect-home'
})

const { loginForm } = storeToRefs(useFormStore())

async function login() {
  const error = await useUserStore().login(loginForm.value.username, loginForm.value.password)
  if (error) {
    return
  }
  useNotificationStore().addSuccess(`Moin ${useUserStore().user?.name}!`, 'Login')
  navigateTo('/')
  useFormStore().$reset()
}
</script>

<template>
  <div class="flex flex-col h-full w-full items-center justify-center" @keydown.enter="login()">
    <UFormField label="Benutzername">
      <UInput v-model="loginForm.username" size="sm" />
    </UFormField>
    <UFormField label="Passwort" class="mt-2">
      <UInput v-model="loginForm.password" type="password" size="sm" />
    </UFormField>
    <UButton label="Login" class="mt-4" size="sm" @click="login()" />
  </div>
</template>
