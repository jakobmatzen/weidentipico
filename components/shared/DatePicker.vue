<script setup lang="ts">
import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date'

const props = defineProps<{
  placeholder?: string
  minValue?: CalendarDate
  maxValue?: CalendarDate
  turnOff?: boolean
}>()

const emit = defineEmits(['select'])

const date = defineModel<Date | string | null>()

const df = new DateFormatter('de-DE', {
  dateStyle: 'medium'
})

const modelValue = shallowRef(date.value
  ? parseDate(new Date(date.value).toLocaleDateString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).split('.').reverse().join('-'))
  : undefined)

const placeholder = shallowRef(modelValue.value ? modelValue.value : new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()))

function update() {
  if (modelValue.value) {
    date.value = new Date(modelValue.value.year, modelValue.value.month - 1, modelValue.value.day)
  }
  else {
    date.value = undefined
  }
}
</script>

<template>
  <UPopover :disabled="props.turnOff">
    <UButton
      color="neutral" variant="outline" class="w-full" size="sm"
      :class="!modelValue && !props.placeholder ? 'text-dimmed' : ''"
      :disabled="props.turnOff"
    >
      {{ modelValue ? df.format(modelValue.toDate(getLocalTimeZone())) : props.placeholder ? props.placeholder
        : 'Datum...' }}
    </UButton>
    <template #content>
      <UCalendar
        v-model="modelValue" v-model:placeholder="placeholder" class="p-2" :min-value="props.minValue"
        :max-value="props.maxValue" @update:model-value="update(), emit('select')"
      />
    </template>
  </UPopover>
</template>
