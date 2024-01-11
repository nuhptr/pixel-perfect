<script setup>
import LoginForm from "@/components/authentication/LoginForm.vue"
</script>

<template>
   <div class="relative overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl">
         <div class="flex flex-col items-center w-full min-h-screen pt-6 sm:justify-center sm:pt-0">
            <div class="w-full p-5 mx-auto sm:max-w-md">
               <h2 class="mb-20 text-5xl font-bold leading-tight tracking-tight text-center">
                  Hi, let's check new design kit
               </h2>
               <LoginForm />
            </div>
            <div class="w-full mx-auto mt-12 sm:max-w-2xl">
               <img src="@/assets/img/brand-logo.svg" alt="" class="w-full px-10 md:px-0" />
            </div>
         </div>
      </div>
   </div>
</template>
