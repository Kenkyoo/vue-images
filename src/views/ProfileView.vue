<template>
  <div class="flex flex-col mt-10">
    <div class="flex flex-col gap-4">
      <Profile />
      <Follows />
    </div>
    <div class="divider"></div>
    <!-- name of each tab group should be unique -->
    <div class="tabs tabs-border flex justify-center items-center mx-auto">
      <input type="radio" name="my_tabs_1" class="tab" aria-label="Favorites" checked />
      <div class="tab-content">
        <div class="flex justify-center items-center">
          <Favorites />
        </div>
      </div>
      <input type="radio" name="my_tabs_1" class="tab" aria-label="My Posts" />
      <div class="tab-content">
        <div class="flex justify-center items-center">
          <Storage />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Favorites from '@/components/favorites/Favorites.vue'
import Profile from '@/components/profile/Profile.vue'
import Storage from '@/components/storage/Storage.vue'
import Follows from '@/components/follows/Follows.vue'
</script>
