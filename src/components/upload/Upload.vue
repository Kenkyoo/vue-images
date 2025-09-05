<template>
  <div>
    <p class="my-4">Upload your pic and see in your posts tabs</p>
    <div class="p-4">
      <input type="file" class="file-input" @change="onFileChange" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { collection, addDoc } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const user = useCurrentUser()
const db = useFirestore()
const errorMessage = ref('')
const router = useRouter()

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
}/upload`
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

function onFileChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  console.log(file)
  uploadPhoto(file)
}
async function uploadPhoto(file: File) {
  if (!user.value) {
    errorMessage.value = 'Debes iniciar sesión para subir una foto.'
    return
  }
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)

  try {
    // 1. Subir el archivo a Cloudinary
    const response = await axios.post(CLOUDINARY_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    const url = response.data.secure_url
    await addDoc(collection(db, 'storage'), {
      user_id: user.value.uid,
      image: url,
      name: file.name,
      createdAt: new Date(),
    })
    console.log('Foto subida!')
    setTimeout(() => {
      router.push('/profile')
    }, 1500)
  } catch (e) {
    console.error('Error al añadir:', e)
  }
}
defineOptions({ name: 'UploadComponent' })
</script>
