<template>
  <div class="flex flex-col gap-6">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">My posts</h1>
      </div>
    </div>
    <Storage />
  </div>
</template>
<script setup lang="ts">
import Storage from '@/components/storage/Storage.vue'
</script>
