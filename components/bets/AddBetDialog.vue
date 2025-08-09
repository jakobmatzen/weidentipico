<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import { storeToRefs } from 'pinia'
import { Bet } from '~/models/Bet'
import { useBetStore } from '~/stores/BetStore'
import { useFormStore } from '~/stores/FormStore'

const emit = defineEmits(['close'])

const { betForm } = storeToRefs(useFormStore())

watch(() => betForm.value.optionCount, (newCount) => {
  const currentLength = betForm.value.options.length
  if (newCount > currentLength) {
    betForm.value.options.push(...new Array(newCount - currentLength).fill(''))
  }
  else if (newCount < currentLength) {
    betForm.value.options.splice(newCount)
  }
}, { immediate: true })

async function createBet() {
  const deadline = new Date(betForm.value.date)
  deadline.setHours(betForm.value.time.hours, betForm.value.time.minutes, 0, 0)
  if (!inputValidation(deadline)) {
    return
  }
  const bet = new Bet({
    description: betForm.value.title,
    createdAt: new Date(),
    deadlineAt: deadline,
    status: 1,
    participants: 0,
    amount: 0
  })
  const error = await useBetStore().createBet(bet, betForm.value.options)
  if (error) {
    return
  }
  useBetStore().fetchData()
  useUserStore().fetchData()
  useNotificationStore().addSuccess('Wette erfolgreich erstellt.')
  emit('close')
}

function inputValidation(deadline: Date) {
  const isValid = ref(true)
  if (betForm.value.title === '') {
    useNotificationStore().addError('Bitte den Titel der Wette angeben.')
    isValid.value = false
  }
  if (betForm.value.title.length > 100) {
    useNotificationStore().addError('Der Titel darf maximal 100 Zeichen lang sein.')
    isValid.value = false
  }
  if (deadline < new Date()) {
    useNotificationStore().addError('Die Wette kann nicht in der Vergangenheit stattfinden.')
    isValid.value = false
  }
  if (betForm.value.options.some((option, index) => index < betForm.value.optionCount && option.trim() === '')) {
    useNotificationStore().addError('Die Optionen müssen alle einen Text enthalten.')
    isValid.value = false
  }
  return isValid.value
}
</script>

<template>
    <UModal title="Wette erstellen" :close="false" :dismissible="false">
        <template #body>
    <div class="h-full flex flex-col items-center">
    <UFormField label="Titel" class="w-full">
      <UInput v-model="betForm.title" size="sm" class="w-full" />
    </UFormField>
    <UFormField label="Frist" class="w-full mt-4">
      <UButtonGroup class="w-full" size="sm">
        <SharedDatePicker
          v-model="betForm.date"
          :min-value="new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())"
        />
        <SharedTimePicker v-model="betForm.time" />
      </UButtonGroup>
    </UFormField>
    <UFormField label="Anzahl der Optionen" class="w-full mt-4">
      <USlider v-model="betForm.optionCount" :min="2" :max="16" class="mt-2" size="sm" />
      <div class="flex justify-center mt-2">
        <span class="text-sm">{{ betForm.optionCount }}</span>
      </div>
    </UFormField>
    <div class="max-h-[13rem] overflow-y-auto w-full px-4 border border-neutral-700 rounded-lg pb-4 mt-4">
      <UFormField v-for="i in betForm.optionCount" :key="i" :label="`Option ${i}`" class="w-full mt-3">
        <UInput v-model="betForm.options[i - 1]" size="sm" class="w-full" />
      </UFormField>
        </div>
    </div>
    </template>
  <template #footer>
    <div class="flex">
      <UButton label="Abbrechen" variant="outline" color="neutral" size="sm" @click="emit('close')" />
      <UButton label="Erstellen" size="sm" class="ml-2" @click="createBet()" />
    </div>
  </template>
  </UModal>
</template>
