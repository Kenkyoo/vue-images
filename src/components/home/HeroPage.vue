<template>
  <div
    class="hero min-h-screen min-w-screen p-0 m-0 w-full"
    style="
      background-image: url(https://images.unsplash.com/photo-1756091710842-f86df05c949a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    "
  >
    <div class="hero-overlay"></div>
    <div class="hero-content text-neutral-content text-center">
      <div class="flex flex-col gap-6 max-w-md">
        <h1 class="mb-5 text-5xl font-bold">App Images</h1>
        <p class="mb-5">Social media for photographers. Share, discover and grow your community</p>
        <div class="flex justify-center items-center mx-auto gap-4">
          <button class="btn btn-primary"><RouterLink to="/feed">Get Started</RouterLink></button>
          <button class="btn btn-primary"><RouterLink to="/login">Login</RouterLink></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
