<script setup>
import { RouterView } from "vue-router"

import TheHeader from "./components/layouts/TheHeader.vue"
</script>

<template>
   <main class="no-scrollbar">
      <TheHeader />
      <RouterView />
   </main>
</template>
