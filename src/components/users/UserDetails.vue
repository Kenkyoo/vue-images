<script setup lang="ts">
import type { User } from '@/types/user'
import { collection, addDoc } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import { ref } from 'vue'

const userName = useCurrentUser()
const db = useFirestore()
const errorMessage = ref('')
const addMessage = ref('')

async function addItem(usr: User) {
  if (!userName.value) {
    errorMessage.value = 'Debes iniciar sesión para marcar una foto como favorita.'
    return
  }
  try {
    await addDoc(collection(db, 'follow'), {
      username: usr.username,
      userImage: usr.profile_image.small,
      user_id: userName.value.uid,
    })
    addMessage.value = 'Follow!'
  } catch (e) {
    console.error('Error al añadir:', e)
  }
}
defineProps<{
  user: User
}>()
defineOptions({
  name: 'UserDetails',
})
</script>
<template>
  <div class="bg-base-100 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <div class="flex items-center gap-4 mb-4">
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-16 rounded-full ring-2 ring-offset-2">
              <img :src="user.profile_image.medium" />
            </div>
          </div>
          <h2 class="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
            {{ user.name }}
          </h2>
          <button @click="addItem(user)" class="btn me-4">
            Follow
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-[1.2em]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
        <p class="mt-2 text-lg/8">
          {{ user.bio }}
        </p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div v-for="image in user.photos" :key="image.id">
          <RouterLink :to="`/photos/${image.id}`">
            <img :src="image.urls.regular" class="w-full" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
