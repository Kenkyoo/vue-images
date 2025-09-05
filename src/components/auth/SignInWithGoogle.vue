<script setup lang="ts">
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const auth = getAuth()
const errorMessage = ref('')
const successMessage = ref('')
const router = useRouter()

const signInWithGoogle = () => {
  errorMessage.value = ''
  successMessage.value = ''

  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      console.log('Usuario de Google:', user)
      successMessage.value = '¡Inicio de sesión con éxito!'
      setTimeout(() => {
        router.push('/feed')
      }, 1500)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      errorMessage.value = error.message
      email.value = error.customData.email
      console.log(errorCode, errorMessage)
    })
}
defineOptions({
  name: 'SignInWithGoogle',
})
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Login With Google</h2>
      <p>If you don't have an account, you can login with Google</p>
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <div class="card-actions justify-center mt-5">
        <button @click="signInWithGoogle" class="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  </div>
</template>
