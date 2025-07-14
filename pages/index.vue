<script setup lang="ts">
definePageMeta({
    middleware: 'redirect-login'
})
</script>

<template>
    <div class="h-full flex flex-col px-2 py-6">
        <div class="flex-1 overflow-y-auto px-5">
            <BetsBetCard />
        </div>
    </div>
</template>
