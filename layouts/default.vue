<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { LazySharedLogoutDialog } from '#components'

const { user } = storeToRefs(useUserStore())

const links = computed<NavigationMenuItem[]>(() => [[{
  label: `Wetten (${useBetStore().getBets.length})`,
  icon: 'i-lucide-dices',
  to: '/'
}, {
  label: `Marktplatz (${useMarketplaceStore().getTradeOffers.length + useMarketplaceStore().getTradeRequests.length})`,
  icon: 'i-lucide-store',
  to: '/marketplace'
}, {
  label: 'Meins',
  icon: 'i-lucide-user',
  defaultOpen: true,
  children: [{
    label: `Wetten (${useBetStore().getBetsForUserOpen.length})`,
    icon: 'i-lucide-dices',
    to: '/user/bets',
  }, {
    label: `Marktplatz (${useMarketplaceStore().getUserTradesOpen.length + useMarketplaceStore().getUserTradesAccepted.length})`,
    icon: 'i-lucide-store',
    to: '/user/marketplace'
  }]
}, {
  label: 'Leaderboard',
  icon: 'i-lucide-chart-no-axes-column',
  to: '/leaderboard'
}, {
  label: `Hinterzimmer (${useBetStore().getBetsForAdminOpen.length})`,
  icon: 'i-lucide-door-closed-locked',
  to: '/hinterzimmer',
  class: user.value?.role === 1 ? '' : 'hidden'
}]])
</script>

<template>
  <div class="h-[calc(100vh-5rem)] flex flex-col overflow-hidden">
    <div class="flex justify-between border-b border-neutral-800 shadow-lg items-center flex-shrink-0">
      <div class="flex items-center my-auto" @click="navigateTo('/')">
        <UIcon name="i-lucide-trees" class="h-6 w-6 ml-4 text-primary-400" @click="navigateTo('/')" />
        <img src="/tipico_logo_white.svg" alt="Logo" class="mt-0.5 h-14 w-14 ml-2">
      </div>
      <UDrawer direction="right" :handle="false">
        <UButton variant="link" icon="i-lucide-menu" size="xl" class="mr-2" />
        <template #header>
          <div class="flex items-center pb-4 border-b border-neutral-800">
            <UAvatar :src="`/users/${user?.username}.jpeg`" :alt="user?.name" size="lg" img-class="object-cover" />
            <div class="flex flex-col ml-3 justify-center">
              <span class="text-sm font-medium">{{ user?.name }}</span>
              <span class="text-xs mt-1 text-neutral-400">NKoins: {{ user?.userWallet?.balance }}</span>
            </div>
          </div>
        </template>
        <template #body>
          <UNavigationMenu :items="links" orientation="vertical" />
        </template>
        <template #footer>
          <div class="w-full flex justify-center pt-4 border-t border-neutral-800">
            <UButton
              label="Abmelden" variant="link" icon="i-lucide-log-out"
              @click="useOverlay().create(LazySharedLogoutDialog).open()"
            />
          </div>
        </template>
      </UDrawer>
    </div>
    <div class="flex-1 overflow-hidden">
      <slot />
    </div>
  </div>
</template>
