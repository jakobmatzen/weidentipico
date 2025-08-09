<script setup lang="ts">
const emit = defineEmits(['close'])

const { user } = storeToRefs(useUserStore())

function logout() {
  emit('close')
  useNotificationStore().addSuccess(`Bis bald, ${user.value?.firstName}!`, 'Logout')
  user.value = undefined
  navigateTo('/login')
}
</script>

<template>
  <UModal title="Abmelden" :close="false">
    <template #body>
      <p>Möchtest du dich wirklich abmelden?</p>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <UButton label="Abbrechen" variant="outline" color="neutral" @click="emit('close')" />
        <UButton label="Abmelden" @click="logout()" />
      </div>
    </template>
  </UModal>
</template>
