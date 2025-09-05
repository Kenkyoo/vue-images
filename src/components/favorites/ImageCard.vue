<template>
  <div class="card w-96">
    <div class="card-body">
      <RouterLink :to="`/photos/${image.image_id}`">
        <img :src="image.image" :alt="image.id" class="w-full object-cover rounded-xl" />
      </RouterLink>
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
