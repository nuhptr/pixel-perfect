<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
   <div class="items-center justify-between hidden w-full md:pl-2 lg:flex md:w-auto md:order-1" id="mobile-menu-2">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular">
         <li>
            <RouterLink to="/" active-class="bg-indigo-600 rounded md:bg-transparent md:text-indigo-600"
               class="block py-2 pl-3 pr-4 text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0"
               aria-current="page">
               Home
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/categories" active-class="bg-indigo-600 rounded md:bg-transparent md:text-indigo-600"
               class="block py-2 pl-3 pr-4 text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0">
               Categories
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/pricing" active-class="bg-indigo-600 rounded md:bg-transparent md:text-indigo-600"
               class="block py-2 pl-3 pr-4 text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0">
               Pricing
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/study-case" active-class="bg-indigo-600 rounded md:bg-transparent md:text-indigo-600"
               class="block py-2 pl-3 pr-4 text-gray-800 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0">
               Study Case
            </RouterLink>
         </li>
      </ul>
   </div>
</template>
