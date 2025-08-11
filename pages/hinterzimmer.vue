<script setup lang="ts">
import { betFilterOptions } from '~/constants/BetFilter'

definePageMeta({
  middleware: ['redirect-non-admin', 'redirect-login']
})

const { getBetsForAdmin } = storeToRefs(useBetStore())
const { betForm } = storeToRefs(useFormStore())
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useBetStore().loading" class="h-full flex flex-col px-2 py-6">
    <div class="flex justify-start pl-5 pr-6">
      <div class="flex items-center">
        <UButtonGroup size="sm">
          <USelect v-model="betForm.selectedBetFilterOption" :items="betFilterOptions" icon="i-lucide-filter" />
          <UButton v-model="betForm.selectedSort" variant="outline" color="neutral" :icon="betForm.selectedSort === 'asc' ? 'i-lucide-arrow-up' : 'i-lucide-arrow-down'" @click="betForm.selectedSort = betForm.selectedSort === 'asc' ? 'desc' : 'asc'" />
        </UButtonGroup>
      </div>
    </div>
    <div class="flex-1 overflow-y-auto px-5 mt-4">
      <BetsBetCard v-for="bet in getBetsForAdmin" :key="bet.id" :bet="bet" />
    </div>
  </div>
  <div v-else class="h-full flex flex-col justify-center px-2 py-6">
    <span class="text-center italic text-xl text-neutral-500">Daten werden geladen...</span>
  </div>
</template>
