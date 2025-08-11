<script setup lang="ts">
import type { RadioGroupValue } from '@nuxt/ui'
import type { Bet } from '~/models/Bet'

const props = defineProps<{
  bet: Bet
}>()

const emit = defineEmits(['close'])

const selectedOption = ref<RadioGroupValue>(props.bet.betOptions![0].id)

async function payout() {
  const error = await useBetStore().payout(props.bet, selectedOption.value as number)
  if (error) {
    return
  }
  useBetStore().fetchData()
  useUserStore().fetchData()
  useFormStore().$reset()
  useNotificationStore().addSuccess('Gewinne wurden erfolgreich ausgeschüttet.')
  emit('close')
}
</script>

<template>
  <UModal :close="false" :dismissible="false">
    <template #body>
      <div class="flex flex-col h-full">
        <span class="text-lg font-medium">{{ props.bet.description }}</span>
        <div class="flex flex-col p-3 rounded-lg border border-neutral-600 bg-slate-800 mt-4">
          <div
            class="flex w-full justify-between text-xs text-neutral-400 mb-3 pb-3 border-b border-neutral-600"
          >
            <span><span class="font-semibold">{{ props.bet.participants === 1 ? `${props.bet.participants} Teilnehme/r` : `${props.bet.participants} Teilnehmende` }}</span></span>
            <span><span class="font-semibold">{{ props.bet.amount }}</span> NKoins</span>
          </div>
          <div class="max-h-[15rem] overflow-y-auto">
            <URadioGroup
              v-model="selectedOption" :items="props.bet.betOptions" value-key="id"
              :description="false"
            >
              <template #label="{ item }">
                <span>{{ item.description }}</span>
              </template>
              <template #description="{ item }">
                <div class="flex justify-between items-center">
                  <span>{{ `${(item.quote).toFixed(1)}` }}</span>
                  <span class="text-xs text-neutral-400">{{ item.amount === 1 ? `${item.amount} NKoins` : `${item.amount} NKoins` }}</span>
                </div>
              </template>
            </URadioGroup>
          </div>
        </div>
        <span class="text-xs text-neutral-400 mt-4">Geschlossen am
          <span class="font-semibold">{{ props.bet.deadlineAt.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }) }}</span> um <span class="font-semibold">{{
            `${props.bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} `
          }} Uhr</span></span>
      </div>
    </template>
    <template #footer="{ close }">
      <UButton label="Schließen" variant="outline" color="neutral" size="sm" @click="close()" />
      <UButton label="Auszahlen" color="primary" class="ml-2" size="sm" @click="payout()" />
    </template>
  </UModal>
</template>
