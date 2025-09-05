<template>
  <div class="flex flex-col gap-6">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Favorites</h1>
      </div>
    </div>
    <Favorites />
  </div>
</template>
<script setup lang="ts">
import Favorites from '@/components/favorites/Favorites.vue'
</script>
