<script setup lang="ts">
await usePrefetchStore().fetchData()

const { notificationList } = storeToRefs(useNotificationStore())

watch(notificationList.value, () => {
  if (notificationList.value.length > 0) {
    useToast().add({
      title: notificationList.value[0].title,
      description: notificationList.value[0].message,
      color: notificationList.value[0].color,
      duration: 5000,
    })
    notificationList.value.shift()
  }
})
</script>

<template>
  <UApp :toaster="{ expand: true }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
