<template>
  <h2 class="text-2xl font-bold mb-4 mt-8 text-white">
    {{ title }}
  </h2>
  <div class="w-full relative">
    <button
      @click="scrollLeft"
      class="
        absolute left-1 top-1/2 
        transform -translate-y-1/2 z-20 bg-black bg-opacity-70 
        hover:bg-opacity-90 text-white px-4 py-4 rounded-full hidden 
        md:flex items-center justify-center text-3xl select-none
      "
      aria-label="Scroll Left"
    >
      ‹
    </button>
    <button
      @click="scrollRight"
      class="
        absolute right-1 top-1/2 transform -translate-y-1/2 z-20 
        bg-black bg-opacity-70 hover:bg-opacity-90 text-white px-4 py-4 
        rounded-full hidden md:flex items-center justify-center text-3xl select-none
      "
      aria-label="Scroll Right"
    >
      ›
    </button>
    <div
      ref="carouselRef"
      class="overflow-x-auto scrollbar-hide relative"
    >
      <div
        class="flex space-x-4 snap-x snap-mandatory pt-2 px-0 md:px-4 transition-all duration-300 ease-in-out"
      >
        <div
          v-for="(card, index) in items"
          :key="index"
          class="
            relative flex-shrink-0 w-52 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-40 md:h-48
            rounded-lg shadow-md snap-center
            border-2 border-transparent hover:border-white
            transition-transform duration-300 transform hover:-translate-y-1
            select-none
          "
          @click="navigateTo(card.link)"
        >
          <img
            :src="card.image"
            alt="card image"
            class="absolute inset-0 w-full h-full object-cover object-top rounded-lg"
          />
          <div class="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          <h3
            class="absolute bottom-4 left-4 right-4 text-white text-sm sm:text-base font-semibold drop-shadow-md px-2"
          >
            {{ card.title }}           
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const carouselRef = ref(null)

const scrollLeft = () => {
  carouselRef.value.scrollBy({
    left: -300,
    behavior: 'smooth',
  })
}

const scrollRight = () => {
  carouselRef.value.scrollBy({
    left: 300,
    behavior: 'smooth',
  })
}

/* Swipe / touch para celular */
onMounted(() => {
  const el = carouselRef.value
  let startX = 0
  let scrollLeftStart = 0
  let isDown = false

  el.addEventListener('touchstart', (e) => {
    isDown = true
    startX = e.touches[0].pageX - el.offsetLeft
    scrollLeftStart = el.scrollLeft
  })

  el.addEventListener('touchmove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.touches[0].pageX - el.offsetLeft
    const walk = (startX - x) * 1.5 // velocidade
    el.scrollLeft = scrollLeftStart + walk
  })

  el.addEventListener('touchend', () => {
    isDown = false
  })
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
