<script setup>
   import { ref } from "vue"

   let props = defineProps({ defaultImage: String, galleries: Array })

   let thumbnail = ref(props.defaultImage)

   function changeImage(image) {
      this.thumbnail = image
   }

   // const defaultImage = ref("")
   // const galleries = ref([
   //    { id: 1, image: "gallery-1.png" },
   //    { id: 2, image: "gallery-2.png" },
   //    { id: 3, image: "gallery-3.png" },
   //    { id: 4, image: "gallery-4.png" },
   // ])
</script>

<template>
   <section id="gallery">
      <!-- <img :src="'/src/assets/img/' + defaultImage" alt="default image" class="w-full mt-6 lg:h-[550px] rounded-2xl" /> -->
      <img :src="thumbnail" alt="default image" class="w-full mt-6 lg:h-[550px] rounded-2xl" />
      <div class="grid grid-cols-4 gap-4 mt-4">
         <template v-for="gallery in galleries" :key="gallery.id">
            <div
               @click="changeImage(gallery.url)"
               class="overflow-hidden cursor-pointer rounded-2xl"
               :class="{ 'ring-2 ring-indigo-500': thumbnail == gallery.url }">
               <!-- <img :src="'/src/assets/img/' + gallery.image" class="w-full lg:h-32" alt="gallery image" /> -->
               <img :src="gallery.url" class="w-full lg:h-32" alt="gallery image" />
            </div>
         </template>
      </div>
   </section>
</template>
