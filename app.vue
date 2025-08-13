<script setup lang="ts">
import { de } from '@nuxt/ui/locale'

onMounted(() => {
  usePrefetchStore().fetchData()
})

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
  <UApp :locale="de" :toaster="{ expand: true }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
