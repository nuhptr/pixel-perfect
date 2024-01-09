<script setup>
   import axios from "axios"
   import { useRoute } from "vue-router"
   import { onMounted, ref } from "vue"

   import ItemsCard from "../ItemsCard.vue"

   let items = ref([])
   let category = ref({})
   let isLoading = ref(false)

   const route = useRoute()

   async function getItemsData() {
      try {
         isLoading.value = true
         const response = await axios.get(
            import.meta.env.VITE_API_URL + "/api/categories?id=" + route.params.id + "&show_product=1"
         )
         // console.log(response.data.data.products)

         items.value = response.data.data.products
         category.value = response.data.data
         isLoading.value = false
      } catch (error) {
         console.log(error)
         isLoading.value = false
      }
   }

   onMounted(() => {
      getItemsData()
   })
</script>

<template>
   <!-- Item -->
   <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ category.name }}</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
         <div v-if="isLoading" class="flex items-center justify-center w-full">Isloading...</div>
         <ItemsCard v-else v-for="item in items" :key="item.id" :id="item.id" :item="item" />
      </div>
   </div>
</template>
