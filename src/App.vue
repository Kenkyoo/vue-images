<script setup lang="ts">
import Navbar from './layout/Navbar.vue'
import Footer from './layout/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div v-if="!['/', '/login'].includes($route.path)">
      <Navbar />
    </div>
    <main class="flex flex-grow justify-center items-center">
      <router-view></router-view>
    </main>
    <div v-if="!['/', '/login'].includes($route.path)">
      <Footer />
    </div>
  </div>
</template>
