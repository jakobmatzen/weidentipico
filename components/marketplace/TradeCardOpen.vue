<script setup lang="ts">
import type { Trade } from '~/models/Trade'
import { LazyMarketplaceAddTradeDialog } from '#components'

const props = defineProps<{
  trade: Trade
}>()

const { user } = storeToRefs(useUserStore())
const { marketplaceForm } = storeToRefs(useFormStore())

function openTradeDialog() {
  marketplaceForm.value.service = props.trade.service
  marketplaceForm.value.price = props.trade.price
  marketplaceForm.value.date = new Date(props.trade.deadlineAt)
  marketplaceForm.value.time = {
    hours: props.trade.deadlineAt.getHours(),
    minutes: props.trade.deadlineAt.getMinutes()
  }
  useOverlay().create(LazyMarketplaceAddTradeDialog).open({ trade: props.trade })
}
</script>

<template>
  <div
    class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3"
    @click="openTradeDialog()"
  >
    <span class="truncate max-w-full font-medium text-sm">{{ props.trade.service }}</span>
    <div class="flex w-full justify-between items-center mt-2 text-xs text-neutral-400">
      <span class="px-1.5 py-0.5 rounded-md text-xs" :class="user && props.trade.supplierId === user.id ? 'text-slate-700 bg-slate-100' : 'text-primary-700 bg-primary-100'">{{ user && props.trade.supplierId === user.id ? 'Angebot' : 'Suche' }}</span>
      <span>{{ props.trade.supplierId !== null ? 'Preis: ' : 'Bezahlung: ' }} <span class="font-semibold">{{ props.trade.price }}</span> NKoins</span>
    </div>
    <span v-if="props.trade.deadlineAt > new Date()" class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Läuft am <span class="font-semibold">{{ props.trade.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${props.trade.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr` }}</span> ab</span>
    <span v-else class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Abgelaufen am <span class="font-semibold">{{ props.trade.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${props.trade.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr` }}</span></span>
  </div>
</template>
