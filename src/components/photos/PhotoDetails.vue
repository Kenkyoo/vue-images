<template>
  <div v-if="addMessage" class="toast toast-top toast-center">
    <div class="alert alert-success">
      <span>{{ addMessage }}</span>
    </div>
  </div>
  <div class="bg-base px-2">
    <div class="pt-6">
      <div class="flex justify-between">
        <div class="breadcrumbs text-sm">
          <ul>
            <li v-for="topic in image.topics" :key="topic.id">
              <a>{{ topic.title }}</a>
            </li>
          </ul>
        </div>
        <div
          class="hidden md:flex tooltip ms-4 cursor-pointer"
          data-tip="Favorite"
          v-if="alreadyFavorite"
        >
          ❤️
        </div>
        <div class="hidden md:flex tooltip" data-tip="add to favorites" v-else>
          <button @click="addPhoto(image)" class="btn btn-ghost ms-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="size-[2.2em] cursor-pointer"
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
      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
        <img
          :src="image.urls.full"
          :alt="image.description"
          class="size-full rounded-lg object-cover"
        />
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-base-200 lg:pr-8">
          <div class="flex gap-4">
            <RouterLink :to="`/users/${image.user.username}`">
              <div class="flex items-center gap-4">
                <div class="avatar">
                  <div
                    class="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2"
                  >
                    <img :src="image.user.profile_image.small" width="100" height="100" />
                  </div>
                </div>
                <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">
                  {{ image.user.name }}
                </h1>
              </div>
            </RouterLink>

            <div>
              <button @click="addItem(image)" class="btn">
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
          </div>
        </div>
        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <div class="flex gap-4">
            <HeartIcon class="size-6 text-primary" />
            <p class="text-3xl tracking-tight">{{ image.likes }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Views</h3>
            <div class="flex items-center">
              <div class="flex gap-4 items-center">
                <EyeIcon class="size-6 text-primary" />

                <a class="text-3xl tracking-tight">{{ image.views }}</a>
              </div>
            </div>
          </div>

          <div class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium mb-4">Color</h3>
              <div class="flex items-center gap-4">
                <div class="badge badge-xl" :style="{ backgroundColor: image.color }"></div>
                <p class="text-3xl tracking-tight">{{ image.color }}</p>
              </div>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium">Tags</h3>
              </div>

              <fieldset aria-label="Choose a size" class="mt-4">
                <div class="grid grid-cols-3 gap-4">
                  <div
                    v-for="tag in image.tags"
                    :key="tag.title"
                    class="badge badge-primary badge-lg p-4 text-xs"
                  >
                    {{ tag.title }}
                  </div>
                </div>
              </fieldset>
            </div>

            <button
              @click="addPhoto(image)"
              class="btn btn-primary mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:outline-hidden"
            >
              Add to favorites
            </button>
          </div>
        </div>
        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base">{{ image.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium">Slugs</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="slugs in image.alternative_slugs" :key="slugs" class="text-base">
                  <span class="text-base">{{ slugs }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm">{{ image.alt_description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="pt-6">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Related Collections</h1>
        <p class="py-6">Provident cupiditate voluptatem et in.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <CardColecction
          v-for="image in image.related_collections.results"
          :key="image.id"
          :image="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EyeIcon, HeartIcon } from '@heroicons/vue/20/solid'
import type { Photo } from '@/types/photo'
import CardColecction from './CardColecction.vue'
import { collection, addDoc, doc, setDoc, getDocs, query, where } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import { ref, onMounted } from 'vue'

const user = useCurrentUser()
const db = useFirestore()
const errorMessage = ref('')
const addMessage = ref('')
const alreadyFavorite = ref(false)

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

async function addItem(usr: Photo) {
  if (!user.value) {
    errorMessage.value = 'Debes iniciar sesión para marcar una foto como favorita.'
    return
  }
  try {
    await addDoc(collection(db, 'follow'), {
      username: usr.user.username,
      userImage: usr.user.profile_image.small,
      user_id: user.value.uid,
    })
    addMessage.value = 'Follow!'
  } catch (e) {
    console.error('Error al añadir:', e)
  }
}

async function addPhoto(img: Photo) {
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
  } catch (e) {
    console.error('Error al añadir:', e)
  }
}

const props = defineProps<{
  image: Photo
}>()
defineOptions({
  name: 'PhotoDetails',
})
onMounted(() => {
  checkFavorite(props.image)
})
</script>
