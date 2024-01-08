<script setup>
   import { ref } from "vue"

   import CategoriesCard from "../CategoriesCard.vue"

   defineProps({ title: String })

   const categories = ref([
      { title: "Mobile UI Kit", itemsCount: 731, image: "categories-1.jpg" },
      { title: "Fonts", itemsCount: 657, image: "categories-2.jpg" },
      { title: "Icon Set", itemsCount: 83559, image: "categories-3.jpg" },
      { title: "Website UI Kit", itemsCount: 4500, image: "categories-4.jpg" },
   ])
</script>

<template>
   <!-- Categories -->
   <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
      <h2 class="mb-4 text-xl font-medium md:text-lg">{{ title ?? "Top Categories" }}</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
         <CategoriesCard
            v-for="category in categories"
            :key="category.title"
            :title="category.title"
            :items-count="category.itemsCount"
            :image="category.image" />
      </div>
   </div>
</template>
