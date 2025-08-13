<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { betFilterOptions } from '~/constants/BetFilter'

definePageMeta({
  middleware: ['redirect-non-admin', 'redirect-login']
})

const { getBetsForAdminOpen, getBetsForAdminClosed } = storeToRefs(useBetStore())
const { betForm } = storeToRefs(useFormStore())

const items = computed<TabsItem[]>(() => [
  {
    label: `Offen (${getBetsForAdminOpen.value.length})`,
    icon: 'i-lucide-clipboard-check',
    slot: 'open-tasks' as const
  },
  {
    label: `Geschlossen (${getBetsForAdminClosed.value.length})`,
    icon: 'i-lucide-archive',
    slot: 'archive' as const
  }
])
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useBetStore().loading" class="h-full flex flex-col px-2 py-6">
    <div class="flex justify-start pl-5 pr-6">
      <div class="flex items-center">
        <UButtonGroup size="sm">
          <USelect v-model="betForm.selectedBetFilterOption" :items="betFilterOptions" icon="i-lucide-filter" />
          <UButton v-model="betForm.selectedSort" variant="outline" color="neutral" :icon="betForm.selectedSort === 'asc' ? 'i-heroicons-bars-arrow-up' : 'i-heroicons-bars-arrow-down'" @click="betForm.selectedSort = betForm.selectedSort === 'asc' ? 'desc' : 'asc'" />
        </UButtonGroup>
      </div>
    </div>
    <UTabs :items="items" variant="link" class="w-full h-full flex flex-col mt-4" :ui="{ content: 'flex flex-col h-full' }" size="sm">
      <template #open-tasks>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <BetsBetCard v-for="bet in getBetsForAdminOpen" :key="bet.id" :bet="bet" :hinterzimmer="true" />
        </div>
      </template>
      <template #archive>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <BetsBetCard v-for="bet in getBetsForAdminClosed" :key="bet.id" :bet="bet" :hinterzimmer="true" />
        </div>
      </template>
    </UTabs>
  </div>
  <div v-else class="h-full flex flex-col justify-center px-2 py-6">
    <span class="text-center italic text-xl text-neutral-500">Daten werden geladen...</span>
  </div>
</template>
