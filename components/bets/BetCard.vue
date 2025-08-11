<script setup lang="ts">
import type { Bet } from '~/models/Bet'
import { LazyBetsBetDetails, LazyBetsBetDetailsAdmin, LazyBetsBetDetailsUser } from '#components'

const props = defineProps<{
  bet: Bet
  hinterzimmer?: boolean
  meins?: boolean
}>()

const option = computed(() => useUserStore().user ? props.bet.betOptions!.find(option => option.betEntries?.some(entry => entry.userId === useUserStore().user?.id))! : null)

function openBetDetails() {
  if (useUserStore().user?.userWallet?.balance === 0) {
    useNotificationStore().addError('Du hast keine NKoins mehr.')
    return
  }
  if (props.hinterzimmer) {
    useOverlay().create(LazyBetsBetDetailsAdmin).open({ bet: props.bet })
  }
  else if (props.meins) {
    useOverlay().create(LazyBetsBetDetailsUser).open({ bet: props.bet })
  }
  else {
    useOverlay().create(LazyBetsBetDetails).open({ bet: props.bet })
  }
}
</script>

<template>
  <div
    class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3"
    @click="openBetDetails()"
  >
    <span class="truncate max-w-full font-medium text-sm">{{ bet.description }}</span>
    <div v-if="!props.meins || bet.status === 1" class="flex w-full justify-between mt-2 text-xs text-neutral-400">
      <span><span class="font-semibold">{{ bet.participants === 1 ? `${bet.participants} Teilnehme/r` : `${bet.participants}` }}</span> Teilnehmende</span>
      <span><span class="font-semibold">{{ bet.amount }}</span> NKoins</span>
    </div>
    <div v-else class="flex w-full justify-between items-center mt-2 text-xs text-neutral-400">
      <div class="flex items-center">
        <UIcon :name="option ? option.isWinner ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle' : ''" :class="option ? option.isWinner ? 'text-green-700' : 'text-primary-700' : ''" class="w-5 h-5" />
        <span class="ml-1">{{ option ? option.isWinner ? 'Gewonnen' : 'Verkackt' : '' }}</span>
      </div>
      <span v-if="option && option.isWinner"><span class="font-semibold text-green-700">{{ `+ ${option ? option.betEntries?.find(entry => entry.userId === useUserStore().user?.id)!.amount! * option.quote : ''}` }}</span> NKoins</span>
      <span v-else><span class="font-semibold text-primary-700">{{ `- ${option ? option.betEntries?.find(entry => entry.userId === useUserStore().user?.id)!.amount : ''}` }}</span> NKoins</span>
    </div>
    <span v-if="bet.status === 1" class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Schließt am
      <span class="font-semibold">{{ bet.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr` }}</span></span>
    <span v-else class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Geschlossen am
      <span class="font-semibold">{{ bet.deadlineAt.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) }}</span> um <span class="font-semibold">{{ `${bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr` }}</span></span>
  </div>
</template>
