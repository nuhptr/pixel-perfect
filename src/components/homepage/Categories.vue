<script setup>
   import CategoriesCard from "../CategoriesCard.vue"
</script>

<template>
   <!-- Categories -->
   <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
         <CategoriesCard title="Mobile UI Kit" :items-count="731" image="categories-1.jpg" />
         <CategoriesCard title="Fonts" :items-count="657" image="categories-2.jpg" />
         <CategoriesCard title="Icon Set" :items-count="83559" image="categories-3.jpg" />
         <CategoriesCard title="Website UI Kit" :items-count="4500" image="categories-4.jpg" />
      </div>
   </div>
</template>
