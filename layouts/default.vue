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
  class: 'cursor-pointer',
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
}, {
  label: 'Wetten erstellen',
  icon: 'i-lucide-circle-fading-plus',
  to: '/add-bet',
  class: user.value?.role !== 1 ? 'hidden' : ''
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
