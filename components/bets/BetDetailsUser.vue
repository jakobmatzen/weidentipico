<script setup lang="ts">
import type { RadioGroupValue } from '@nuxt/ui'
import type { Bet } from '~/models/Bet'

const props = defineProps<{
  bet: Bet
}>()

const option = computed(() => props.bet.betOptions!.find(option => option.betEntries?.some(entry => entry.userId === useUserStore().user?.id))!)

const selectedOption = ref<RadioGroupValue>(option.value.id)
</script>

<template>
  <UModal :close="false" :dismissible="false">
    <template #body>
      <div class="flex flex-col h-full">
        <span class="text-lg font-medium">{{ props.bet.description }}</span>
        <span class="text-sm text-neutral-400 mt-2">Du hast <span class="font-semibold">{{ option.betEntries?.find(entry => entry.userId === useUserStore().user?.id)!.amount! }}</span> NKoins eingesetzt</span>
        <div class="flex flex-col p-3 rounded-lg border border-neutral-600 bg-slate-800 mt-4">
          <div
            class="flex w-full justify-between text-xs text-neutral-400 mb-3 pb-3 border-b border-neutral-600"
          >
            <span><span class="font-semibold">{{ bet.participants }}</span> {{ bet.participants === 1 ? 'Teilnehme/r' : 'Teilnehmende' }}</span>
            <span><span class="font-semibold">{{ props.bet.amount }}</span> NKoins</span>
          </div>
          <div class="max-h-[15rem] overflow-y-auto">
            <URadioGroup
              v-model="selectedOption" :items="props.bet.betOptions" value-key="id"
              :description="false"
              disabled
            >
              <template #label="{ item }">
                <span>{{ `${item.description} ${item.isWinner ? '(Gewinner)' : ''}` }}</span>
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
        <span v-if="props.bet.status === 1" class="text-xs text-neutral-400 mt-4">Schließt am
          <span class="font-semibold">{{ props.bet.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${props.bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} ` }} Uhr</span>
        </span>
        <span v-else class="text-xs text-neutral-400 mt-4">Geschlossen am
          <span class="font-semibold">{{ props.bet.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${props.bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} ` }} Uhr</span>
        </span>
      </div>
    </template>
    <template #footer="{ close }">
      <UButton label="Schließen" variant="outline" color="neutral" size="sm" @click="close()" />
    </template>
  </UModal>
</template>
