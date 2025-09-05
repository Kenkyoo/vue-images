<template>
  <main>
    <div class="hero bg-base min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left ms-6">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div class="card bg-base-300 w-full max-w-sm shrink-0 shadow-2xl">
          <div class="card-body">
            <!-- name of each tab group should be unique -->
            <div class="tabs tabs-lift">
              <input type="radio" name="my_tabs_3" class="tab" aria-label="Register" checked />
              <div class="tab-content bg-base-100 border-base-300 p-6">
                <Register />
              </div>

              <input type="radio" name="my_tabs_3" class="tab" aria-label="Login" />
              <div class="tab-content bg-base-100 border-base-300 p-6">
                <SignIn />
              </div>

              <input type="radio" name="my_tabs_3" class="tab" aria-label="Google" />
              <div class="tab-content bg-base-100 border-base-300 p-6">
                <SignInWithGoogle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import Register from '@/components/auth/Register.vue'
import SignIn from '@/components/auth/SignIn.vue'
import SignInWithGoogle from '@/components/auth/SignInWithGoogle.vue'
import { useRouter } from 'vue-router'
import { useCurrentUser } from 'vuefire'

const user = useCurrentUser()
const router = useRouter()
if (user.value) {
  router.push('/feed')
}
</script>
