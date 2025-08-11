<script setup lang="ts">
definePageMeta({
  middleware: 'redirect-login'
})

const { getLeaderboard } = storeToRefs(useUserStore())
</script>

<template>
  <div v-if="!usePrefetchStore().loading && !useUserStore().loading" class="h-full flex flex-col px-1 py-6">
    <div class="max-h-[36rem] overflow-y-auto">
      <div v-for="(user, index) in getLeaderboard" :key="user.id" class="flex items-center mb-4 pl-6 pr-5">
        <div class="w-10">
          <span class="font-medium">{{ index + 1 }}.</span>
        </div>
        <UAvatar
          :src="`/users/${user.username}.jpeg`"
          :alt="user.name"
          size="3xl"
        />
        <span class="ml-3 text-xl">{{ user.name }}</span>
      </div>
    </div>
  </div>
</template>
