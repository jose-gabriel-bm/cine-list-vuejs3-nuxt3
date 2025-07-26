<template>
  <button @click="toggle" class="focus:outline-none ml-2">
    <component
      :is="isFavorited ? SolidStar : OutlinedStar"
      class="w-6 h-6 transition-colors"
      :class="isFavorited ? 'text-yellow-400' : 'text-white'"
    />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

import { StarIcon as SolidStar } from '@heroicons/vue/24/solid'
import { StarIcon as OutlinedStar } from '@heroicons/vue/24/outline'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const favorites = useFavoritesStore()

const isFavorited = computed(() => favorites.isFavorite(props.id))

function toggle() {
  favorites.toggleFavorite(props.id)
}
</script>
