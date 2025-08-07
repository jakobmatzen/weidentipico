<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFormStore } from '~/stores/FormStore'
import { CalendarDate } from '@internationalized/date'
import { Bet } from '~/models/Bet'
import { useBetStore } from '~/stores/BetStore'

definePageMeta({
    middleware: 'redirect-login'
})

const { betForm } = storeToRefs(useFormStore())

watch(() => betForm.value.optionCount, (newCount) => {
    const currentLength = betForm.value.options.length
    if (newCount > currentLength) {
        betForm.value.options.push(...Array(newCount - currentLength).fill(''))
    } else if (newCount < currentLength) {
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
        status: 1
    })
    const error = await useBetStore().createBet(bet, betForm.value.options)
    if (error) {
        return
    }
    useFormStore().$reset()
    useNotificationStore().addSuccess('Wette erfolgreich erstellt.')
}

function inputValidation(deadline: Date) {
    const isValid = ref(true)
    if (betForm.value.title === '') {
        useNotificationStore().addError('Bitte den Titel der Wette angeben.')
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
    <div class="h-full flex flex-col items-center p-6">
        <UFormField label="Titel" class="w-full">
            <UInput v-model="betForm.title" class="w-full" />
        </UFormField>
        <UFormField label="Frist" class="w-full mt-4">
            <UButtonGroup class="w-full">
                <SharedDatePicker v-model="betForm.date"
                    :min-value="new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())" />
                <SharedTimePicker v-model="betForm.time" />
            </UButtonGroup>
        </UFormField>
        <UFormField label="Anzahl der Optionen" class="w-full mt-4">
            <USlider v-model="betForm.optionCount" :min="2" :max="16" class="mt-2" />
            <div class="flex justify-center mt-2">
                <span class="text-sm">{{ betForm.optionCount }}</span>
            </div>
        </UFormField>
        <div class="flex-1 w-full overflow-y-auto px-5 border border-neutral-700 rounded-lg pb-4 mt-4">
            <UFormField v-for="i in betForm.optionCount" :key="i" :label="`Option ${i}`" class="w-full mt-4">
                <UInput v-model="betForm.options[i - 1]" class="w-full" />
            </UFormField>
        </div>
        <div class="flex justify-center mt-6 w-full">
            <UButton label="Erstellen" @click="createBet()" />
        </div>
    </div>
</template>
