<script setup lang="ts">
import { usePrefetchStore } from '~/stores/PrefetchStore'

await usePrefetchStore().fetchData()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
