<script setup lang="ts">
import type { RadioGroupValue } from '@nuxt/ui'
import { CalendarDate } from '@internationalized/date'
import { Trade } from '~/models/Trade'

const props = defineProps<{
  trade?: Trade
}>()

const emit = defineEmits(['close'])

const { user } = storeToRefs(useUserStore())
const { marketplaceForm } = storeToRefs(useFormStore())

const serviceType = ref<RadioGroupValue>(props?.trade ? props.trade.supplierId === user.value!.id ? 'Ich biete' : 'Ich suche' : 'Ich biete')

const isEditing = ref(false)

watch(serviceType, () => {
  marketplaceForm.value.price = 0
})

async function createTrade() {
  const deadline = new Date(marketplaceForm.value.date)
  deadline.setHours(marketplaceForm.value.time.hours, marketplaceForm.value.time.minutes, 0, 0)
  if (!inputValidation(deadline)) {
    return
  }
  const trade = new Trade({
    supplierId: serviceType.value === 'Ich biete' ? user.value!.id! : null,
    customerId: serviceType.value === 'Ich suche' ? user.value!.id! : null,
    service: marketplaceForm.value.service,
    price: marketplaceForm.value.price,
    createdAt: new Date(),
    deadlineAt: deadline,
    acceptedAt: null,
    confirmedAt: null
  })
  const error = await useMarketplaceStore().createTrade(trade)
  if (error) {
    return
  }
  useMarketplaceStore().fetchData()
  useUserStore().fetchData()
  useNotificationStore().addSuccess('Angebot erfolgreich erstellt.')
  emit('close')
}

async function updateTrade() {
  const deadline = new Date(marketplaceForm.value.date)
  deadline.setHours(marketplaceForm.value.time.hours, marketplaceForm.value.time.minutes, 0, 0)
  if (!inputValidation(deadline)) {
    return
  }
  const trade = new Trade({
    id: props.trade!.id,
    supplierId: props.trade!.supplierId,
    customerId: props.trade!.customerId,
    service: marketplaceForm.value.service,
    price: marketplaceForm.value.price,
    createdAt: props.trade!.createdAt,
    deadlineAt: deadline,
    acceptedAt: props.trade!.acceptedAt,
    confirmedAt: props.trade!.confirmedAt
  })
  const error = await useMarketplaceStore().updateTrade(trade)
  if (error) {
    return
  }
  useMarketplaceStore().fetchData()
  useUserStore().fetchData()
  useNotificationStore().addSuccess('Angebot erfolgreich aktualisiert.')
  emit('close')
}

function inputValidation(deadline: Date) {
  const isValid = ref(true)
  if (marketplaceForm.value.service === '') {
    useNotificationStore().addError('Das Angebot muss eine Beschreibung haben.')
    isValid.value = false
  }
  if (marketplaceForm.value.service.length > 100) {
    useNotificationStore().addError('Die Beschreibung darf maximal 100 Zeichen lang sein.')
    isValid.value = false
  }
  if (deadline < new Date()) {
    useNotificationStore().addError('Die Deadline des Angebots kann nicht in der Vergangenheit liegen.')
    isValid.value = false
  }
  return isValid.value
}
</script>

<template>
  <UModal :title="props?.trade ? undefined : 'Angebot erstellen'" :close="false" :dismissible="false">
    <template #body>
      <div class="h-full flex flex-col items-center">
        <UFormField :label="props?.trade ? 'Kategorie' : 'Was für ein Angebot möchtest du erstellen?'" class="w-full">
          <URadioGroup v-model="serviceType" :items="['Ich biete', 'Ich suche']" :disabled="props?.trade ? true : false" />
        </UFormField>
        <UFormField label="Beschreibung" class="w-full mt-4">
          <UInput v-model="marketplaceForm.service" size="sm" class="w-full" :disabled="props?.trade && !isEditing ? true : false" />
        </UFormField>
        <div class="flex flex-col mt-4 w-full">
          <UFormField label="Preis" class="w-full">
            <USlider v-model="marketplaceForm.price" :min="0" :max="serviceType === 'Ich biete' ? 10000 : user!.userWallet!.balance" :step="100" class="mt-2" :disabled="props?.trade && !isEditing ? true : false" />
            <div class="flex items-center justify-center mt-2">
              <UInput v-model="marketplaceForm.price" size="sm" class="w-20" type="number" :disabled="props?.trade && !isEditing ? true : false" />
              <span class="text-sm ml-2">{{ marketplaceForm.price === 1 ? ' NKoin' : ' NKoins' }}</span>
            </div>
          </UFormField>
        </div>
        <UFormField label="Deadline" class="w-full mt-4">
          <UButtonGroup class="w-full" size="sm">
            <SharedDatePicker
              v-model="marketplaceForm.date"
              :min-value="new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())"
              :turn-off="props?.trade && !isEditing ? true : false"
            />
            <SharedTimePicker v-model="marketplaceForm.time" :turn-off="props?.trade && !isEditing ? true : false" />
          </UButtonGroup>
        </UFormField>
      </div>
    </template>
    <template #footer>
      <div class="flex">
        <UButton label="Abbrechen" variant="outline" color="neutral" size="sm" @click="emit('close')" />
        <UButton v-if="!props?.trade" label="Inserieren" size="sm" class="ml-2" @click="createTrade()" />
        <UButton v-else-if="props?.trade && !isEditing" label="Bearbeiten" variant="outline" size="sm" class="ml-2" @click="isEditing = true" />
        <UButton v-else label="Speichern" size="sm" class="ml-2" @click="updateTrade()" />
      </div>
    </template>
  </UModal>
</template>
