<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const auth = getAuth()
const errorMessage = ref('')
const successMessage = ref('')
const router = useRouter()

const signIn = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'El email y la contraseña son obligatorios.'
    return
  }

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user
      console.log(user)
      successMessage.value = '¡Inicio de sesión con éxito!'

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
  name: 'SignInComponent',
})
</script>

<template>
  <div>
    <fieldset class="fieldset">
      <label class="label">Email</label>
      <input type="email" class="input" placeholder="Email" v-model="email" />
      <label class="label">Password</label>
      <input type="password" class="input" placeholder="Password" v-model="password" />
      <button @click="signIn" class="btn btn-neutral mt-4">Login</button>
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
