<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { useUserStore } from "@/stores/user"

import Logo from "./Logo.vue"
import NavigationLink from "./NavigationLink.vue"
import AuthButton from "./AuthButton.vue"
import UserInfo from "./UserInfo.vue"

const userStore = useUserStore()
// const getUser = computed(() => userStore.getUser)
const isLoggedIn = computed(() => userStore.isLoggedIn)
const user = computed(() => userStore.user)

let isBlurActive = ref(false)

function updateScroll() {
   const scrollPosition = window.scrollY || document.documentElement.scrollTop
   isBlurActive = scrollPosition > 50
}

const addBackdrop = computed(() => (isBlurActive ? "backdrop-blur" : ""))

onMounted(() => {
   window.addEventListener("scroll", updateScroll)
   userStore.fetchUser()
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
            <UserInfo v-if="isLoggedIn" :user="user.data" />
            <AuthButton v-else />
            <NavigationLink />
         </div>
      </nav>
   </header>
</template>
