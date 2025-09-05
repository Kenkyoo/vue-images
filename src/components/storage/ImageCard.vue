<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure class="px-10 pt-10">
      <img :src="image.image" :alt="image.name" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{{ image.name }}</h2>
      <p>{{ image.createdAt }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Image } from '@/types/image'
defineProps<{
  image: Image
}>()
defineOptions({
  name: 'ImageComponent',
})
</script>
