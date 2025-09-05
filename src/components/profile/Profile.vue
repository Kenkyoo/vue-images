<script setup lang="ts">
import { useCurrentUser } from 'vuefire'
const user = useCurrentUser()
console.log(user)
defineOptions({ name: 'ProfileComponent' })
</script>
<template>
  <div v-if="user" class="flex justify-center items-center gap-4 mb-4">
    <div v-if="user.photoURL">
      <div class="avatar">
        <div class="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
          <img :src="user.photoURL" />
        </div>
      </div>
    </div>
    <div>
      <div class="avatar">
        <div class="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
        </div>
      </div>
    </div>
    <div>
      <h2>{{ user.email }}</h2>
    </div>
  </div>
</template>
