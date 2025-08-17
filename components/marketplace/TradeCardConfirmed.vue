<script setup lang="ts">
import type { Trade } from '~/models/Trade'

const props = defineProps<{
  trade: Trade
}>()

const { user } = storeToRefs(useUserStore())
</script>

<template>
  <div class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3">
    <span class="truncate max-w-full font-medium text-sm">{{ props.trade.service }}</span>
    <div class="flex w-full justify-between items-center mt-2 text-xs text-neutral-400">
      <div class="flex items-center">
        <UAvatar v-if="user && props.trade.supplierId === user.id" :src="`/users/${props.trade.customer!.username}.jpeg`" :alt="props.trade.customer!.name" size="sm" img-class="object-cover" />
        <UAvatar v-else :src="`/users/${props.trade.supplier!.username}.jpeg`" :alt="props.trade.supplier!.name" size="sm" img-class="object-cover" />
        <span v-if="user && props.trade.supplierId === user.id" class="ml-2">Gekauft von: <span class="font-semibold">{{ props.trade.customer!.name }}</span></span>
        <span v-else class="ml-2">DienstleisterIn: <span class="font-semibold">{{ props.trade.supplier!.name }}</span></span>
      </div>
      <span><span class="font-semibold" :class="user && props.trade.supplierId !== user.id ? 'text-primary-700' : 'text-green-700'">{{ user && props.trade.supplierId !== user.id ? `- ${props.trade.price}` : `+ ${props.trade.price}` }}</span> NKoins</span>
    </div>
    <span class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Bestätigt am <span class="font-semibold">{{ props.trade.confirmedAt ? new Date(props.trade.confirmedAt).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '' }}</span> um <span class="font-semibold">{{ `${props.trade.confirmedAt ? new Date(props.trade.confirmedAt).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) : 'N/A'} Uhr` }}</span></span>
  </div>
</template>
