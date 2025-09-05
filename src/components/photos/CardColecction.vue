<script setup lang="ts">
import type { related } from '@/types/related'
defineProps<{
  image: related
}>()
defineOptions({
  name: 'CardCollection',
})
</script>
<template>
  <div class="card bg-base-100 image-full w-96 shadow-sm">
    <figure>
      <img :src="image.cover_photo.urls.small" alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ image.title }}</h2>
      <p>{{ image.cover_photo.description }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary"><a :href="image.links.html">Ver</a></button>
      </div>
    </div>
  </div>
</template>
