<script setup>
   import { computed, onBeforeUnmount, onMounted, ref } from "vue"
   import { RouterLink } from "vue-router"

   let isBlurActive = ref(false)

   const updateScroll = () => {
      let scrollPosition = window.scrollY || document.documentElement.scrollTop
      isBlurActive = scrollPosition > 30
      console.log(isBlurActive)
   }

   const addBackdrop = computed(() => {
      return isBlurActive ? "backdrop-blur" : ""
   })

   onMounted(() => {
      window.addEventListener("scroll", updateScroll)
   })
   onBeforeUnmount(() => {
      window.removeEventListener("scroll", updateScroll)
   })
</script>

<template>
   <header class="sticky top-0 z-50" :class="addBackdrop">
      <nav class="bg-white/40 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
         <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <RouterLink to="/" class="flex items-center">
               <img src="@/assets/img/logo.svg" class="h-8 ml-3 sm:ml-0 sm:h-8" alt="Logo" />
            </RouterLink>
            <div class="md:order-2">
               <a
                  href="login.html"
                  class="px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300/20 md:py-2 md:text-sm md:px-8">
                  Sign In
               </a>
               <a
                  href="register.html"
                  class="px-8 py-3 text-base font-medium text-white border border-transparent rounded-full dark:hover:bg-slate-300/15 bg-navy md:py-2 md:text-sm md:px-8">
                  Sign Up
               </a>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
               <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">
                  <li>
                     <RouterLink
                        to="/"
                        class="block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white"
                        aria-current="page">
                        Home
                     </RouterLink>
                  </li>
                  <li>
                     <RouterLink
                        to="/categories"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Categories
                     </RouterLink>
                  </li>
                  <li>
                     <RouterLink
                        to="/pricing"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Pricing
                     </RouterLink>
                  </li>
                  <li>
                     <RouterLink
                        to="/study-case"
                        class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        Study Case
                     </RouterLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </header>
</template>
