<script setup>
import { RouterLink } from "vue-router"

const props = defineProps({ id: Number, item: Object })
</script>

<template>
   <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <div class="overflow-hidden border border-gray-200 rounded-xl">
         <RouterLink :to="'/product-details/' + id">
            <div class="m-4 overflow-hidden rounded-xl">
               <!-- * Use src binding and static path for image -->
               <!-- <img alt="Placeholder" class="block w-full h-auto" :src="'/src/assets/img/' + image" /> -->
               <img alt="Placeholder" class="block w-full h-auto" :src="props.item.thumbnails" />
            </div>
         </RouterLink>

         <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
               <RouterLink :to="'/product-details/' + props.id"
                  class="font-semibold text-black no-underline hover:underline">
                  {{ item.name }}
               </RouterLink>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline"> {{ item.subtitle }} </span>
         </header>
      </div>
   </div>
</template>
