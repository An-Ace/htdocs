<template>
  <Suspense>
    <div class="relative bg-white">
      <main class="min-h-screen">
        <RouterView />
      </main>
    </div>
  </Suspense>
</template>

<script setup>
import './sass/app.scss';
import 'vue3-toastify/dist/index.css';
import { RouterLink } from 'vue-router';
// import LoginButton from './components/LoginButton.vue';

</script>