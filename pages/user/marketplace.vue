<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { marketplaceFilterOptions } from '~/constants/MarketplaceFilter'

definePageMeta({
  middleware: 'redirect-login'
})

const { getUserTradesOpen, getUserTradesAccepted, getUserTradesConfirmed } = storeToRefs(useMarketplaceStore())
const { marketplaceForm } = storeToRefs(useFormStore())

const items = computed<TabsItem[]>(() => [
  {
    label: `Offen (${getUserTradesOpen.value.length})`,
    icon: 'i-lucide-clipboard-clock',
    slot: 'open' as const
  },
  {
    label: `Akzeptiert (${getUserTradesAccepted.value.length})`,
    icon: 'i-lucide-check',
    slot: 'accepted' as const
  },
  {
    label: `Bestätigt (${getUserTradesConfirmed.value.length})`,
    icon: 'i-lucide-check-check',
    slot: 'confirmed' as const
  }
])
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useMarketplaceStore().loading" class="h-full flex flex-col px-2 py-6">
    <div class="flex justify-start pl-5 pr-6">
      <div class="flex items-center">
        <UButtonGroup size="sm">
          <USelect v-model="marketplaceForm.selectedMarketplaceFilterOption" :items="marketplaceFilterOptions" icon="i-lucide-filter" />
          <UButton v-model="marketplaceForm.selectedMarketplaceSort" variant="outline" color="neutral" :icon="marketplaceForm.selectedMarketplaceSort === 'asc' ? 'i-heroicons-bars-arrow-up' : 'i-heroicons-bars-arrow-down'" @click="marketplaceForm.selectedMarketplaceSort = marketplaceForm.selectedMarketplaceSort === 'asc' ? 'desc' : 'asc'" />
        </UButtonGroup>
      </div>
    </div>
    <UTabs :items="items" variant="link" class="w-full h-full flex flex-col mt-4" :ui="{ content: 'flex flex-col h-full' }" size="sm">
      <template #open>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <MarketplaceTradeCardOpen v-for="trade in getUserTradesOpen" :key="trade.id" :trade="trade" />
        </div>
      </template>
      <template #accepted>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <MarketplaceTradeCardAccepted v-for="trade in getUserTradesAccepted" :key="trade.id" :trade="trade" />
        </div>
      </template>
      <template #confirmed>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <MarketplaceTradeCardConfirmed v-for="trade in getUserTradesConfirmed" :key="trade.id" :trade="trade" />
        </div>
      </template>
    </UTabs>
  </div>
  <div v-else class="h-full flex flex-col justify-center px-2 py-6">
    <span class="text-center italic text-xl text-neutral-500">Daten werden geladen...</span>
  </div>
</template>
