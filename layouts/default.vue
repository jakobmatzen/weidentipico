<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { LazySharedLogoutDialog } from '#components'

const { user } = storeToRefs(useUserStore())

const links = computed<NavigationMenuItem[]>(() => [[{
    label: 'Wetten',
    icon: 'i-lucide-dices',
    to: '/'
}, {
    label: 'Marktplatz',
    icon: 'i-lucide-store',
    defaultOpen: true,
    children: [{
        label: 'Angebote',
        icon: 'i-lucide-tags',
    }, {
        label: 'Inserieren',
        icon: 'i-lucide-list-plus',
    }]
}, {
    label: 'Leaderboard',
    icon: 'i-lucide-chart-no-axes-column',
}, {
    label: 'Meins',
    icon: 'i-lucide-user',
}]])
</script>

<template>
    <div class="h-screen flex flex-col overflow-hidden">
        <div class="flex justify-between p-2 border-b border-neutral-800 shadow-lg items-center flex-shrink-0">
            <UIcon name="i-lucide-tent-tree" class="h-6 w-6 ml-2 text-primary-400" />
            <UDrawer direction="right" :handle="false">
                <UButton variant="link" icon="i-lucide-menu" size="xl" />
                <template #header>
                    <div class="flex items-center pb-4 border-b border-neutral-800">
                        <UAvatar src="https://github.com/shadcn.png" size="lg" />
                        <div class="flex flex-col ml-3 justify-center">
                            <span class="text-sm font-medium">{{ user?.firstName }} {{ user?.lastName }}</span>
                            <span class="text-xs mt-1 text-neutral-400">NKoins: {{ user?.userWallet?.balance }}</span>
                        </div>
                    </div>
                </template>
                <template #body>
                    <UNavigationMenu :items="links" orientation="vertical" />
                </template>
                <template #footer>
                    <div class="w-full flex justify-center pt-4 border-t border-neutral-800">
                        <UButton label="Abmelden" variant="link" icon="i-lucide-log-out"
                            @click="useOverlay().create(LazySharedLogoutDialog).open()" />
                    </div>
                </template>
            </UDrawer>
        </div>
        <div class="flex-1 overflow-hidden">
            <slot />
        </div>
    </div>
</template>
