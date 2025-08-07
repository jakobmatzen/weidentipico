<script setup lang="ts">
import type { Bet } from '~/models/Bet';

const props = defineProps<{
    bet: Bet
}>()

const betEntries = computed(() => {
    return props.bet.betOptions?.flatMap((option) => option.betEntries)
})

const totalAmount = computed(() => {
    return betEntries.value?.reduce((acc, entry) => acc + (entry?.amount ?? 0), 0) ?? 0
})
</script>

<template>
    <div class="flex flex-col w-full p-3 rounded-lg border border-neutral-600 bg-slate-800 mb-3">
        <span class="truncate max-w-full font-medium text-sm">{{ bet.description }}</span>
        <div class="flex w-full justify-between mt-2 text-xs text-neutral-400">
            <span><span class="font-semibold">{{ betEntries?.length }}</span> Teilnehmende</span>
            <span><span class="font-semibold">{{ totalAmount }}</span> NKoins</span>
        </div>
        <span class="mt-3 pt-3 border-t border-neutral-600 text-xs text-neutral-400">Schließt am
            <span class="font-semibold">{{ bet.deadlineAt.toLocaleDateString('de-DE', {
                day: '2-digit', month:
                    '2-digit', year: 'numeric'
            }) }}</span> um <span class="font-semibold">{{
                    bet.deadlineAt.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr'
                }}</span></span>
    </div>
</template>
