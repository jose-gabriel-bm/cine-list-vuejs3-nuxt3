<template>
  <div class="relative min-h-screen text-white pt-12">
    <div
      class="absolute inset-0 bg-cover bg-center brightness-50"
      :style="{ backgroundImage: `url(${getBackdropUrl(details?.backdrop_path)})` }"
    ></div>
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
      <img
        v-if="details?.poster_path"
        :src="getPosterUrl(details.poster_path)"
        alt="Pôster"
        class="w-64 rounded-lg shadow-lg"
      />
      <div class="flex-1 space-y-4 max-w-2xl">
        <h1 class="text-3xl md:text-4xl font-bold">{{ details?.title }}</h1>

        <p class="text-sm text-gray-300">
          <span class="font-semibold">Lançamento:</span> {{ details?.release_date }}
          <span class="ml-4 font-semibold">Ano:</span> {{ getYear(details?.release_date) }}
        </p>

        <div class="flex flex-wrap gap-2 text-sm">
          <span
            v-for="genre in details?.genres"
            :key="genre.id"
            class="bg-white text-black px-2 py-1 rounded"
          >
            {{ genre.name }}
          </span>
          <FavoriteToggle :movie="{
            id: details.id,
            title: details.title,
            image:`https://image.tmdb.org/t/p/w500${details.poster_path}`
          }" />
        </div>
        <p class="text-lg leading-relaxed text-gray-200">
          {{ details?.overview }}
        </p>
      </div>
    </div>

    <div class="relative z-10 pb-12 px-4">
      <CardCarousel title="Recomendações" :items="popularCards"/>
    </div>

  </div>
</template>

<script setup>

import FavoriteToggle from '~/components/ui/FavoriteToggle.vue'
import CardCarousel from '~/components/ui/CardCarousel.vue'

const route = useRoute()
const API_KEY = 'beed4e65bca0365111bd1076df78d4aa'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'pt-BR'


/* Busca os Detalhes */
const { data: details } = await useFetch(`${BASE_URL}/movie/${route.params.id}`, {
  query: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
})

/* Busca os Filmes Recomendados */
const { data: popularData } = await useFetch(`${BASE_URL}/movie/${route.params.id}/recommendations?language=pt-BR&page=1`, {
  query: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
})

const popularCards = computed(() => {
  if (!popularData.value || !popularData.value.results) return []
  return popularData.value.results.map((movie) => ({
    title: movie.title,
    image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`,
    link: `/item/${movie.id}`,
    id:movie.id
  }))
})

/* Helpers */
const getPosterUrl = (path) => `https://image.tmdb.org/t/p/w500${path}`
const getBackdropUrl = (path) => `https://image.tmdb.org/t/p/original${path}`
const getYear = (date) => date ? new Date(date).getFullYear() : ''

useHead({
  title: details.value?.title || 'Detalhes do Filme',
  meta: [
    { name: 'description', content: details.value?.overview || '' },
    { property: 'og:title', content: details.value?.title || '' },
    { property: 'og:description', content: details.value?.overview || '' },
  ]
})

</script>
