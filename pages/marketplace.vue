<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { LazyMarketplaceAddTradeDialog } from '#components'
import { marketplaceFilterOptions } from '~/constants/MarketplaceFilter'

definePageMeta({
  middleware: 'redirect-login'
})

const { getTradeOffers, getTradeRequests } = storeToRefs(useMarketplaceStore())
const { marketplaceForm } = storeToRefs(useFormStore())

const items = computed<TabsItem[]>(() => [
  {
    label: `Ich biete (${getTradeOffers.value.length})`,
    icon: 'i-lucide-tags',
    slot: 'offers' as const
  },
  {
    label: `Ich suche (${getTradeRequests.value.length})`,
    icon: 'i-lucide-search',
    slot: 'requests' as const
  }
])
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useBetStore().loading" class="h-full flex flex-col px-2 py-6">
    <div class="flex justify-between pl-5 pr-6">
      <div class="flex items-center">
        <UButtonGroup size="sm">
          <USelect v-model="marketplaceForm.selectedMarketplaceFilterOption" :items="marketplaceFilterOptions" icon="i-lucide-filter" />
          <UButton v-model="marketplaceForm.selectedMarketplaceSort" variant="outline" color="neutral" :icon="marketplaceForm.selectedMarketplaceSort === 'asc' ? 'i-heroicons-bars-arrow-up' : 'i-heroicons-bars-arrow-down'" @click="marketplaceForm.selectedMarketplaceSort = marketplaceForm.selectedMarketplaceSort === 'asc' ? 'desc' : 'asc'" />
        </UButtonGroup>
      </div>
      <UButton label="Inserieren" icon="i-lucide-list-plus" variant="outline" size="sm" @click="useFormStore().$reset(), useOverlay().create(LazyMarketplaceAddTradeDialog).open()" />
    </div>
    <UTabs :items="items" variant="link" class="w-full h-full flex flex-col mt-4" :ui="{ content: 'flex flex-col h-full' }" size="sm">
      <template #offers>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <MarketplaceTradeCard v-for="offer in getTradeOffers" :key="offer.id" :trade="offer" />
        </div>
      </template>
      <template #requests>
        <div class="max-h-[27rem] overflow-y-auto px-5 mt-2">
          <MarketplaceTradeCard v-for="request in getTradeRequests" :key="request.id" :trade="request" />
        </div>
      </template>
    </UTabs>
  </div>
  <div v-else class="h-full flex flex-col justify-center px-2 py-6">
    <span class="text-center italic text-xl text-neutral-500">Daten werden geladen...</span>
  </div>
</template>
