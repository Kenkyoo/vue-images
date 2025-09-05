<template>
  <div v-if="addMessage" class="toast toast-top toast-start">
    <div class="alert alert-success">
      <span>{{ addMessage }}</span>
    </div>
  </div>
  <div class="card card-border bg-base-100 w-96 card-lg shadow-lg">
    <RouterLink :to="`/photos/${image.id}`">
      <figure>
        <img :src="image.urls.regular" :alt="image.title" />
      </figure>
    </RouterLink>
    <div class="card-body">
      <RouterLink :to="`/users/${image.user.username}`">
        <div class="flex items-center gap-4">
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
              <img :src="image.user.profile_image.small" width="100" height="100" />
            </div>
          </div>
          <h2>{{ image.user.name }}</h2>
        </div>
      </RouterLink>

      <div class="card-actions justify-end items-center gap-4">
        <div class="tooltip" :data-tip="image.color">
          <div class="badge badge-primary badge-md" :style="{ backgroundColor: image.color }"></div>
        </div>
        <div class="flex items-center gap-2">
          <div class="tooltip ms-4 cursor-pointer" data-tip="Favorite" v-if="alreadyFavorite">
            ❤️
          </div>
          <div class="tooltip" data-tip="add to favorites" v-else>
            <button @click="addItem(image)" class="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-[2.2em]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Photo } from '@/types/photos'
import { collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import { ref, onMounted } from 'vue'

const user = useCurrentUser()
const db = useFirestore()
const errorMessage = ref('')
const alreadyFavorite = ref(false)
const addMessage = ref('')

async function checkFavorite(img: Photo) {
  if (!user.value) return

  const q = query(
    collection(db, 'favorites'),
    where('user_id', '==', user.value.uid),
    where('image_id', '==', img.id),
  )

  const snapshot = await getDocs(q)
  alreadyFavorite.value = !snapshot.empty
}

async function addItem(img: Photo) {
  if (!user.value) {
    errorMessage.value = 'Debes iniciar sesión para marcar una foto como favorita.'
    return
  }
  try {
    const favoriteRef = doc(db, 'favorites', `${user.value.uid}_${img.id}`)
    await setDoc(favoriteRef, {
      user_id: user.value.uid,
      image_id: img.id,
      image: img.urls.regular,
    })
    setTimeout(() => {
      addMessage.value = 'Fav added!'
    }, 2000)

    alreadyFavorite.value = true
  } catch (e) {
    console.error('Error al añadir:', e)
  }
}
const props = defineProps<{
  image: Photo
}>()
defineOptions({
  name: 'CardImage',
})
onMounted(() => {
  checkFavorite(props.image)
})
</script>
