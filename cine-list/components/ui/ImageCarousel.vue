<template>
  <div
    class="
      mt-14
      relative w-full max-w-7xl mx-auto
      overflow-hidden rounded-2xl shadow-lg cursor-pointer
      border-2 border-transparent hover:border-white
    "
  >
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0 relative"
        @click="navigateTo(image.link)"
      >
        <img
          :src="image.src"
          alt="Imagem do carrossel"
          class="w-full h-[40vw] sm:h-[300px] md:h-[400px] lg:h-[350px] object-cover"
          draggable="false"
        />
        <div
          class="
            absolute top-0 left-0 p-6 sm:p-10 text-white
            w-full sm:w-1/2 h-full flex flex-col justify-center
            bg-gradient-to-r from-black/70 to-transparent
          "
        >
          <h2 class="text-xl sm:text-2xl md:text-4xl font-bold drop-shadow">
            {{ image.title }}
          </h2>
          <p class="text-sm sm:text-base md:text-lg mt-2 drop-shadow">
            {{ image.subtitle.join(', ') }}<FavoriteToggle :id="image?.id" />
          </p>
        </div>
      </div>
    </div>

    <button
      @click="prev"
      aria-label="Slide anterior"
      class="
        absolute left-2 top-1/2 transform -translate-y-1/2
        bg-black bg-opacity-50 hover:bg-opacity-75
        text-white p-4 rounded-full
        transition
      "
    >
      ‹
    </button>
    <button
      @click="next"
      aria-label="Próximo slide"
      class="
        absolute right-2 top-1/2 transform -translate-y-1/2
        bg-black bg-opacity-50 hover:bg-opacity-75
        text-white p-4 rounded-full
        transition
      "
    >
      ›
    </button>

    <div
      class="
        absolute bottom-2 left-1/2 transform -translate-x-1/2
        flex gap-2
      "
    >
      <span
        v-for="(image, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full cursor-pointer transition"
        :class="index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script setup>
import FavoriteToggle from '~/components/ui/FavoriteToggle.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  autoSlide: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
})

const currentIndex = ref(0)
let intervalId = null

function next() {
  if (!props.images.length) return
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prev() {
  if (!props.images.length) return
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

function goToSlide(index) {
  currentIndex.value = index
}

onMounted(() => {
  if (props.autoSlide && props.images.length > 1) {
    intervalId = setInterval(next, props.interval)
  }
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
