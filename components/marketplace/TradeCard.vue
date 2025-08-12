<script setup lang="ts">
import type { Trade } from '~/models/Trade'

const props = defineProps<{
  trade: Trade
  meins?: boolean
}>()

function openTradeDetails() {
//   if (useUserStore().user?.userWallet?.balance === 0) {
//     useNotificationStore().addError('Du hast keine NKoins mehr.')
//   }
//   else if (props.meins) {
//     useOverlay().create(LazyBetsBetDetailsUser).open({ bet: props.bet })
//   }
//   else {
//     useOverlay().create(LazyBetsBetDetails).open({ bet: props.bet })
//   }
}
</script>

<template>
  <div
    class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3"
    @click="openTradeDetails()"
  >
    <span class="truncate max-w-full font-medium text-sm">{{ props.trade.service }}</span>
    <div class="flex w-full justify-between mt-2 text-xs text-neutral-400">
      <span>ErstellerIn: <span class="font-semibold">{{ props.trade.supplierId !== null ? props.trade.supplier!.name : props.trade.customer!.name }}</span></span>
      <span>{{ props.trade.supplierId !== null ? 'Preis: ' : 'Bezahlung: ' }} <span class="font-semibold">{{ props.trade.price }}</span> NKoins</span>
    </div>
    <span class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Läuft am
      <span class="font-semibold">{{ props.trade.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${props.trade.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr` }}</span> ab</span>
  </div>
</template>
