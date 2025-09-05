<script setup lang="ts">
import { watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import type { User } from '@/types/user'
import UserDetails from '@/components/users/UserDetails.vue'
import Loader from '@/components/ui/Loader.vue'
// Obtenemos la ruta actual para acceder a los parámetros
const route = useRoute()

// Variables reactivas para el estado del componente
const user = ref<User | null>(null) // Ahora es un solo objeto Photo, no un array
const loading = ref(false)
const errorMessage = ref('')

// Variables de entorno
const { VITE_BASE_URL, VITE_API_KEY } = import.meta.env
const endpoint = 'users/'
const url = `${VITE_BASE_URL}${endpoint}`

// Función para obtener la foto de la API
const fetchUser = async () => {
  const username = route.params.username
  if (!username) return // Si no hay ID, no hacemos nada

  loading.value = true
  errorMessage.value = ''

  try {
    const res = await axios.get<User>(`${url}${username}?client_id=${VITE_API_KEY}`)
    user.value = res.data // Asignamos el objeto de la foto
  } catch (err) {
    console.error('Error fetching user:', err)
    if (axios.isAxiosError(err)) {
      errorMessage.value = `Error: ${err.response?.status} - ${err.response?.statusText}`
    } else {
      errorMessage.value = 'Ocurrió un error inesperado al cargar la imagen.'
    }
  } finally {
    loading.value = false
  }
}

// Observamos los cambios en el ID de la ruta para recargar la foto
watch(
  () => route.params.username,
  () => {
    fetchUser()
  },
)

// Llamamos a la función cuando el componente se monta por primera vez
onMounted(() => {
  fetchUser()
})

// Opcional: define el nombre del componente para la depuración
defineOptions({
  name: 'UserView',
})
</script>

<template>
  <div v-if="!loading">
    <UserDetails v-if="user" :user="user" />
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<style scoped>
/* No se necesita CSS extra si se usan las clases de Tailwind */
</style>
