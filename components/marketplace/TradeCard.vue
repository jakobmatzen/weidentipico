<script setup lang="ts">
import type { Trade } from '~/models/Trade'
import { LazyMarketplaceAcceptTradeDialog } from '#components'

const props = defineProps<{
  trade: Trade
}>()

function openTradeDetails() {
  if (props.trade.customerId === null && useUserStore().user!.userWallet!.balance < props.trade.price) {
    useNotificationStore().addError('Du hast nicht genügend NKoins.')
  }
  else {
    useOverlay().create(LazyMarketplaceAcceptTradeDialog).open({ trade: props.trade })
  }
}
</script>

<template>
  <div
    class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3"
    @click="openTradeDetails()"
  >
    <span class="truncate max-w-full font-medium text-sm">{{ props.trade.service }}</span>
    <div class="flex w-full justify-between items-center mt-2 text-xs text-neutral-400">
      <div class="flex items-center">
        <UAvatar :src="`/users/${props.trade.supplierId !== null ? props.trade.supplier!.username : props.trade.customer!.username}.jpeg`" :alt="props.trade.supplierId !== null ? props.trade.supplier!.name : props.trade.customer!.name" size="sm" img-class="object-cover" />
        <span class="font-semibold ml-2">{{ props.trade.supplierId !== null ? props.trade.supplier!.name : props.trade.customer!.name }}</span>
      </div>
      <span>{{ props.trade.supplierId !== null ? 'Preis: ' : 'Bezahlung: ' }} <span class="font-semibold">{{ props.trade.price }}</span> NKoins</span>
    </div>
    <span class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Läuft am <span class="font-semibold">{{ props.trade.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${props.trade.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr` }}</span> ab</span>
  </div>
</template>
