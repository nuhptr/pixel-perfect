<script setup>
   import { onMounted, ref } from "vue"
   import axios from "axios"

   import CategoriesCard from "../CategoriesCard.vue"

   let categories = ref([])
   let isLoading = ref(false)

   onMounted(() => {
      getCategoriesData()
   })

   async function getCategoriesData() {
      try {
         isLoading.value = true
         const response = await axios.get(import.meta.env.VITE_API_URL + "/api/categories?show_product=1&limit=4")
         // console.log(response.data.data)

         categories.value = response.data.data.data
         isLoading.value = false
      } catch (error) {
         console.error(error)
         isLoading.value = false
      }
   }
</script>

<template>
   <!-- Categories -->
   <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
      <h2 class="mb-4 text-xl font-medium md:text-lg">Top Categories</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
         <div v-if="isLoading" class="flex items-center justify-center w-full">Loading data...</div>
         <CategoriesCard v-else v-for="category in categories" :key="category.name" :category="category" />
      </div>
   </div>
</template>
