<script setup lang="ts">
const props = defineProps<{
  turnOff?: boolean
}>()

const time = defineModel<{ hours: number, minutes: number }>()
</script>

<template>
  <UPopover :disabled="props.turnOff">
    <UButton color="neutral" variant="outline" class="w-full" size="sm" :class="!time ? 'text-dimmed' : ''" :disabled="props.turnOff">
      {{ time ? `${time.hours}:${time.minutes === 0 ? '00' : time.minutes < 10 ? `0${time.minutes}`
        : time.minutes} Uhr` : 'Uhrzeit...' }}
    </UButton>
    <template #content>
      <div class="flex flex-col p-3 w-[20rem]">
        <UFormField label="Stunden">
          <USlider v-model="time!.hours" :min="0" :max="23" :step="1" />
          <div class="flex justify-center mt-2">
            <span class="text-sm">{{ time!.hours }}</span>
          </div>
        </UFormField>
        <UFormField label="Minuten" class="mt-4">
          <USlider v-model="time!.minutes" :min="0" :max="59" :step="1" />
          <div class="flex justify-center mt-2">
            <span class="text-sm">{{ time!.minutes === 0 ? '00' : time!.minutes < 10 ? `0${
              time!.minutes}` : time!.minutes }}</span>
          </div>
        </UFormField>
      </div>
    </template>
  </UPopover>
</template>
