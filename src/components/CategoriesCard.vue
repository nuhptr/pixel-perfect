<script setup>
   defineProps({ category: Object })

   // just adding commas to numbers if you not passing constructor options
   const formatNumber = (number) => new Intl.NumberFormat().format(number)
</script>

<template>
   <div class="w-full px-1 my-1 md:w-1/2 lg:wmy-4 lg:px-4 lg:w-1/4">
      <div class="overflow-hidden border border-gray-200 rounded-xl">
         <RouterLink :to="{ name: 'category-items', params: { id: category.id } }">
            <div class="m-4 overflow-hidden rounded-xl">
               <!-- <img alt="Placeholder" class="block w-full h-auto" :src="'/src/assets/img/' + image" /> -->
               <img alt="Placeholder" class="block w-full h-auto" :src="category.thumbnails" />
            </div>
         </RouterLink>

         <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
               <RouterLink
                  :to="{ name: 'category-items', params: { id: category.id } }"
                  class="font-semibold text-black no-underline hover:underline">
                  {{ category.name }}
               </RouterLink>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
               {{ formatNumber(category.products_count) }} items
            </span>
         </header>
      </div>
   </div>
</template>
