<template>
  <div class="grid grid-cols-1 gap-4">
    <ImageCard v-for="image in data" :key="image.id" :image="image" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import ImageCard from './ImageCard.vue'
import type { Image } from '@/types/image'

const user = useCurrentUser()
const db = useFirestore()
const data = ref<Image[]>([])
const errorMessage = ref('')

async function getStorage() {
  if (!user.value) {
    errorMessage.value = 'Debes iniciar sesión para ver o subir tus fotos.'
    return
  }
  try {
    const storage = collection(db, 'storage')
    const q = query(storage, where('user_id', '==', user.value.uid))

    const querySnapshot = await getDocs(q)

    // guardar documentos en `data`
    data.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Image[]
    console.log('Get collection!', data.value)
  } catch (e) {
    console.error('Error al obtener:', e)
  }
}
getStorage()

defineOptions({ name: 'StorageComponent' })
</script>
