<script setup lang="ts">
import { usePrefetchStore } from '~/stores/PrefetchStore'

await usePrefetchStore().fetchData()
</script>

<template>
  <UApp :toaster="{ expand: true }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
