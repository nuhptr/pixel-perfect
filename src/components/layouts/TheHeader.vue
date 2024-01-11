<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"

import Logo from "./Logo.vue"
import NavigationLink from "./NavigationLink.vue"
import AuthButton from "./AuthButton.vue"
import UserInfo from "./UserInfo.vue"

let isBlurActive = ref(false)

function updateScroll() {
   let scrollPosition = window.scrollY || document.documentElement.scrollTop
   isBlurActive = scrollPosition > 50
}

const addBackdrop = computed(() => (isBlurActive ? "backdrop-blur" : ""))

onMounted(() => {
   window.addEventListener("scroll", updateScroll)
})
onBeforeUnmount(() => {
   window.removeEventListener("scroll", updateScroll)
})
</script>

<template>
   <header class="sticky top-0 z-50" :class="addBackdrop">
      <nav class="bg-white/40 px-2 sm:px-4 py-2.5">
         <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <Logo />
            <AuthButton />
            <!-- <UserInfo
               :user="{
                  name: 'John Doe',
                  profile_photo_url: '/src/assets/img/gallery-1.png',
                  email: 'jhondoe@gmail.com'
               }" /> -->
            <NavigationLink />
         </div>
      </nav>
   </header>
</template>
