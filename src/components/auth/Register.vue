<script setup lang="ts">
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = getAuth()
const errorMessage = ref('')
const successMessage = ref('')
const router = useRouter()

const register = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'El email y la contraseña son obligatorios.'
    return
  }

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      console.log(user)
      successMessage.value = '¡Cuenta creada con éxito!'
      setTimeout(() => {
        router.push('/feed')
      }, 2000)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      errorMessage.value = error.message
      // ..
      console.log(errorCode, errorMessage)
    })
}
defineOptions({
  name: 'RegisterComponent',
})
</script>

<template>
  <div>
    <fieldset class="fieldset">
      <label class="label">Email</label>
      <input type="email" class="input" placeholder="Email" v-model="email" />
      <label class="label">Password</label>
      <input type="password" class="input" placeholder="Password" v-model="password" />
      <button @click="register" class="btn btn-neutral mt-4">Register</button>
    </fieldset>
  </div>
  <div v-if="errorMessage">
    <div class="toast toast-top toast-center">
      <div class="alert alert-error">
        <span>{{ errorMessage }}</span>
      </div>
    </div>
  </div>
  <div v-if="successMessage">
    <div class="toast toast-top toast-center">
      <div class="alert alert-info">
        <span>{{ successMessage }}</span>
      </div>
    </div>
  </div>
</template>
