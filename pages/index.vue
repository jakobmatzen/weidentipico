<script setup lang="ts">
import { LazyBetsAddBetDialog } from '#components'
import { betFilterOptions } from '~/constants/BetFilter'

definePageMeta({
  middleware: 'redirect-login'
})

const { getBets } = storeToRefs(useBetStore())
const { betForm } = storeToRefs(useFormStore())
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useBetStore().loading" class="h-full flex flex-col px-2 py-6">
    <div class="flex justify-between pl-5 pr-6">
      <div class="flex items-center">
        <UButtonGroup size="sm">
          <USelect v-model="betForm.selectedBetFilterOption" :items="betFilterOptions" icon="i-lucide-filter" />
          <UButton v-model="betForm.selectedSort" variant="outline" color="neutral" :icon="betForm.selectedSort === 'asc' ? 'i-heroicons-bars-arrow-up' : 'i-heroicons-bars-arrow-down'" @click="betForm.selectedSort = betForm.selectedSort === 'asc' ? 'desc' : 'asc'" />
        </UButtonGroup>
      </div>
      <UButton label="Erstellen" icon="i-lucide-circle-fading-plus" variant="outline" size="sm" @click="useFormStore().$reset(), useOverlay().create(LazyBetsAddBetDialog).open()" />
    </div>
    <div class="max-h-[30rem] overflow-y-auto px-5 mt-4">
      <BetsBetCard v-for="bet in getBets" :key="bet.id" :bet="bet" />
    </div>
  </div>
  <div v-else class="h-full flex flex-col justify-center px-2 py-6">
    <span class="text-center italic text-xl text-neutral-500">Daten werden geladen...</span>
  </div>
</template>
