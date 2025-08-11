<script setup lang="ts">
import type { RadioGroupValue } from '@nuxt/ui'
import type { Bet } from '~/models/Bet'
import { BetEntry } from '~/models/BetEntry'

const props = defineProps<{
  bet: Bet
}>()

const emit = defineEmits(['close'])

const { user } = storeToRefs(useUserStore())
const { betForm } = storeToRefs(useFormStore())

const selectedOption = ref<RadioGroupValue>(props.bet.betOptions![0].id)

watch(() => betForm.value.amount, () => {
  if (betForm.value.amount > user.value!.userWallet!.balance!) {
    betForm.value.amount = user.value!.userWallet!.balance!
  }
  if (betForm.value.amount < 1) {
    betForm.value.amount = 1
  }
})

async function placeBet() {
  if (props.bet.deadlineAt < new Date()) {
    useNotificationStore().addError('Die Wette ist bereits abgelaufen. Bitte lade die Seite neu.')
    return
  }
  const betEntry = new BetEntry({
    optionId: selectedOption.value as number,
    userId: user.value!.id!,
    amount: betForm.value.amount
  })
  const quote = (props.bet.amount + betForm.value.amount) / (props.bet.betOptions!.find(option => option.id === selectedOption.value)!.amount! + betForm.value.amount)
  const error = await useBetStore().placeBet(props.bet.id!, betEntry, betForm.value.amount, quote)
  if (error) {
    return
  }
  useBetStore().fetchData()
  useUserStore().fetchData()
  useFormStore().$reset()
  useNotificationStore().addSuccess('Wette erfolgreich platziert.')
  emit('close')
}

async function closeBet() {
  const error = await useBetStore().closeBet(props.bet.id!)
  if (error) {
    return
  }
  useBetStore().fetchData()
  useUserStore().fetchData()
  useNotificationStore().addSuccess('Wette erfolgreich geschlossen.')
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
        <div class="flex flex-col mt-4">
          <UFormField label="Einsatz" class="w-full">
            <USlider v-model="betForm.amount" :min="1" :max="user?.userWallet?.balance" class="mt-2" />
            <div class="flex items-center justify-center mt-2">
              <UInput v-model="betForm.amount" size="sm" class="w-20" type="number" />
              <span class="text-sm ml-2">{{ betForm.amount === 1 ? ' NKoin' : ' NKoins' }}</span>
            </div>
          </UFormField>
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
      <UButton v-if="user?.role === 1" label="Wette schließen" variant="outline" class="ml-2" size="sm" @click="closeBet()" />
      <UButton label="Reingehen" color="primary" class="ml-2" size="sm" @click="placeBet()" />
    </template>
  </UModal>
</template>
