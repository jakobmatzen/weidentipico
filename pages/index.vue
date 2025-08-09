<script setup lang="ts">
definePageMeta({
  middleware: 'redirect-login'
})

const { getBets } = storeToRefs(useBetStore())
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useBetStore().loading" class="h-full flex flex-col px-2 py-6">
    <div class="flex-1 overflow-y-auto px-5">
      <BetsBetCard v-for="bet in getBets" :key="bet.id" :bet="bet" />
    </div>
  </div>
  <div v-else class="h-full flex flex-col justify-center px-2 py-6">
    <span class="text-center italic text-xl text-neutral-500">Daten werden geladen...</span>
  </div>
</template>
