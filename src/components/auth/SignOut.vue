<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCurrentUser } from 'vuefire'

const auth = getAuth()
const errorMessage = ref('')
const successMessage = ref('')
const router = useRouter()
const user = useCurrentUser()

const signOutAccount = () => {
  errorMessage.value = ''
  successMessage.value = ''

  signOut(auth)
    .then(() => {
      successMessage.value = '¡Hasta luego!'
      setTimeout(() => {
        router.push('/')
      }, 1500)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      errorMessage.value = error.message
      console.log(errorCode, errorMessage)
    })
}
defineOptions({
  name: 'SignOut',
})
</script>

<template>
  <main>
    <div v-if="errorMessage"></div>
    <div v-if="user">
      <div class="dropdown dropdown-end me-4">
        <div tabindex="0" role="button" class="btn btn-ghost">
          <div v-if="user.photoURL">
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2"
              >
                <img :src="user.photoURL" />
              </div>
            </div>
          </div>
          <div>
            <div class="avatar">
              <div
                class="ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring-2 ring-offset-2"
              >
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
          </div>
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-4 shadow-sm"
        >
          <li class="mt-3"><RouterLink to="/profile">Profile</RouterLink></li>
          <li class="mt-3"><RouterLink to="/profile/upload">Create</RouterLink></li>
          <li class="mt-3">
            <button @click="signOutAccount" class="btn btn-neutral">SignOut</button>
          </li>
        </ul>
      </div>
    </div>
    <button v-else class="btn btn-neutral ms-4"><RouterLink to="/login">Login</RouterLink></button>
  </main>
</template>
