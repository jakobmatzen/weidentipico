<script setup lang="ts">
await usePrefetchStore().fetchData()
</script>

<template>
  <UApp :toaster="{ expand: true }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
