<script setup>
import axios from "axios"
import { onMounted, ref } from "vue"

import ItemsCard from "../ItemsCard.vue"

let items = ref([])
let isLoading = ref(false)

defineProps({ titleSection: String })

async function getItemsData() {
   try {
      isLoading.value = true
      const response = await axios.get(import.meta.env.VITE_API_URL + "/api/products?limit=3")
      // console.log(response.data.data.data)

      items.value = response.data.data.data
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
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
         <div v-if="isLoading" class="flex items-center justify-center w-full">Loading data...</div>
         <ItemsCard v-else v-for="item in items" :key="item.id" :id="item.id" :item="item" />
      </div>
   </div>
</template>
