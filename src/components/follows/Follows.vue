<template>
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn btn-primary w-60 mx-auto" onclick="my_modal_1.showModal()">Follows</button>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">My follows</li>

        <li v-for="usr in data" :key="usr.id" class="list-row">
          <div><img class="size-10 rounded-box" :src="usr.userImage" /></div>
          <div>
            <div>{{ usr.username }}</div>
            <div class="text-xs uppercase font-semibold opacity-60">{{ usr.user_id }}</div>
          </div>
        </li>
      </ul>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useFirestore, useCurrentUser } from 'vuefire'
import type { User } from '@/types/user'

const user = useCurrentUser()
const db = useFirestore()
const data = ref<User[]>([])
const errorMessage = ref('')

async function getFollows() {
  if (!user.value) {
    errorMessage.value = 'Debes iniciar sesión para ver o guardar tus favoritos.'
    return
  }
  try {
    const follows = collection(db, 'follow')
    const q = query(follows, where('user_id', '==', user.value.uid))

    const querySnapshot = await getDocs(q)

    // guardar documentos en `data`
    data.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as User[]
    console.log('Get collection!', data.value)
  } catch (e) {
    console.error('Error al obtener:', e)
  }
}
getFollows()
defineOptions({ name: 'FollowsComponent' })
</script>
