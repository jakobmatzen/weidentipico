<script setup lang="ts">
import type { Bet } from '~/models/Bet'
import { LazyBetsBetDetailsEntry, LazyBetsBetDetailsPayout } from '#components'

const props = defineProps<{
  bet: Bet
  hinterzimmer?: boolean
}>()

function openBetDetails() {
  if (useUserStore().user?.userWallet?.balance === 0) {
    useNotificationStore().addError('Du hast keine NKoins mehr.')
    return
  }
  if (props.hinterzimmer) {
    useOverlay().create(LazyBetsBetDetailsPayout).open({ bet: props.bet })
  }
  else {
    useOverlay().create(LazyBetsBetDetailsEntry).open({ bet: props.bet })
  }
}
</script>

<template>
  <div
    class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3"
    @click="openBetDetails()"
  >
    <span class="truncate max-w-full font-medium text-sm">{{ bet.description }}</span>
    <div class="flex w-full justify-between mt-2 text-xs text-neutral-400">
      <span><span class="font-semibold">{{ bet.participants === 1 ? `${bet.participants} Teilnehme/r` : `${bet.participants} Teilnehmende` }}</span></span>
      <span><span class="font-semibold">{{ bet.amount }}</span> NKoins</span>
    </div>
    <span v-if="bet.status === 1" class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Schließt am
      <span class="font-semibold">{{ bet.deadlineAt.toLocaleDateString('de-DE', {
        day: '2-digit',
        month:
          '2-digit',
        year: 'numeric',
      }) }}</span> um <span class="font-semibold">{{
        `${bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr`
      }}</span></span>
    <span v-else class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Geschlossen am
      <span class="font-semibold">{{ bet.deadlineAt.toLocaleDateString('de-DE', {
        day: '2-digit',
        month:
          '2-digit',
        year: 'numeric',
      }) }}</span> um <span class="font-semibold">{{
        `${bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} Uhr`
      }}</span></span>
  </div>
</template>
