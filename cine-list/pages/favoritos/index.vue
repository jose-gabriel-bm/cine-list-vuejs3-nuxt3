<template>
  <div class="min-h-screen text-white px-4 py-8 pt-24">
    <h1 class="text-3xl font-bold mb-6 text-center">Meus Favoritos</h1>
    <div v-if="favorites.items.length === 0" class="text-gray-400 text-lg text-center">
      Nenhum filme foi favoritado ainda.
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="movie in favorites.items"
        :key="movie.id"
        class="
        relative h-48 rounded-lg overflow-hidden shadow-lg
        border-2 border-transparent hover:border-white
        cursor-pointer
        "
        @click="navigateTo(`item/${movie.id}`)"
      >
        <div
          class="absolute inset-0 bg-cover bg-center brightness-75"
          :style="{ backgroundImage: `url(${movie.image})` }"
        ></div>
        <div class="relative z-10 h-full flex items-end p-4">
          <h2 class="text-lg font-semibold drop-shadow-md">
            {{ movie.title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: 'auth'
  })

  import { useFavoritesStore } from '@/stores/favorites'

  const favorites = useFavoritesStore()
</script>
