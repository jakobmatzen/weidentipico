<script setup lang="ts">
import type { Trade } from '~/models/Trade'

const props = defineProps<{
  trade: Trade
}>()

const emit = defineEmits(['close'])

async function confirmTrade() {
  const error = await useMarketplaceStore().confirmTrade(props.trade.id!, new Date())
  if (error) {
    return
  }
  useMarketplaceStore().fetchData()
  useUserStore().fetchData()
  useNotificationStore().addSuccess('Transaktion erfolgreich bestätigt.')
  emit('close')
}
</script>

<template>
  <UModal :close="false" :dismissible="false">
    <template #body>
      <div class="flex flex-col">
        <span class="text-lg font-medium">{{ props.trade.service }}</span>
        <span class="text-sm mt-4">{{ `Hat ${props.trade.supplier!.name} den Service erledigt und möchtest du die Transaktion bestätigen?` }}</span>
      </div>
    </template>
    <template #footer="{ close }">
      <UButton label="Abbrechen" variant="outline" color="neutral" @click="close()" />
      <UButton label="Bestätigen" class="ml-2" @click="confirmTrade()" />
    </template>
  </UModal>
</template>
