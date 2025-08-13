<script setup lang="ts">
import type { Trade } from '~/models/Trade'

const props = defineProps<{
  trade: Trade
}>()

const emit = defineEmits(['close'])

async function acceptTrade() {
  if (props.trade.deadlineAt < new Date()) {
    useNotificationStore().addError('Das Angebot ist bereits abgelaufen. Bitte lade die Seite neu.')
    return
  }
  const error = await useMarketplaceStore().acceptTrade(props.trade.id!, useUserStore().user!.id!, new Date())
  if (error) {
    return
  }
  useMarketplaceStore().fetchData()
  useUserStore().fetchData()
  if (props.trade.supplierId) {
    useNotificationStore().addSuccess('Angebot erfolgreich gekauft. Bitte bestätige die Transaktion unter "Meins", sobald der Service erledigt wurde.')
  }
  else {
    useNotificationStore().addSuccess('Angebot erfolgreich angenommen. Du bekommst deine NKoins, sobald der Service bestätigt wurde.')
  }
  emit('close')
}
</script>

<template>
  <UModal :close="false" :dismissible="false">
    <template #body>
      <div class="flex flex-col">
        <span class="text-lg font-medium">{{ props.trade.service }}</span>
        <span class="text-sm mt-4">{{ props.trade.supplierId ? 'Möchtest du dieses Angebot kaufen?' : 'Möchtest du dieses Angebot annehmen?' }}</span>
      </div>
    </template>
    <template #footer="{ close }">
      <UButton label="Abbrechen" variant="outline" color="neutral" @click="close()" />
      <UButton :label="props.trade.supplierId ? 'Kaufen' : 'Annehmen'" class="ml-2" @click="acceptTrade()" />
    </template>
  </UModal>
</template>
