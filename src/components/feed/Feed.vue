<template>
  <div>
    <div class="flex flex-col justify-center items-center gap-10" v-if="!loading">
      <div class="mt-8">
        <label class="input">
          <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            class="input input-primary"
            placeholder="Search"
            v-model="searchTerm"
          />
        </label>
      </div>
      <div class="grid grid-cols-1 gap-8">
        <Card v-for="img in data" :key="img.id" :image="img" />
      </div>
      <div>
        <div class="join p-8 my-6">
          <button @click="prevPage" class="join-item btn">«</button>
          <button class="join-item btn">Page {{ page }}</button>
          <button @click="nextPage" class="join-item btn">»</button>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import axios from 'axios'
import type { Photo } from '@/types/photos'
import Card from '../photos/Card.vue'
import Loader from '../ui/Loader.vue'

const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env
const endpoint = 'search/photos'
const url = `${VITE_BASE_URL}${endpoint}?client_id=${VITE_API_KEY}&query=`

const searchTerm = ref('nature')
const data = ref<Photo[]>([])
const page = ref(1)
const loading = ref(false)

const nextPage = () => page.value++
const prevPage = () => {
  if (page.value > 1) page.value--
}

async function fetch() {
  if (!searchTerm.value) return
  loading.value = true
  try {
    const res = await axios.get(`${url}${searchTerm.value}&page=${page.value}&per_page=24`)
    data.value = res.data.results
  } finally {
    loading.value = false
  }
}

const debouncedFetch = useDebounceFn(fetch, 1500)

watch(
  [searchTerm, page],
  ([newSearch], [oldSearch]) => {
    if (newSearch !== oldSearch) {
      page.value = 1
      debouncedFetch()
    } else {
      fetch()
    }
  },
  { immediate: true },
) // 🔹 ejecuta también al montar
defineOptions({ name: 'FeedComponent' })
</script>
