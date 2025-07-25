<template>
  <CardCarousel title="Populares" :items="popularCards"/>
  <CardCarousel title="Estreiam em Breve" :items="upcomingCards"/>
  <CardCarousel title="Séries exibidas hoje" :items="todaySeriesCards"/>
</template>
<script setup>

import CardCarousel from '~/components/ui/CardCarousel.vue'

const API_KEY = 'beed4e65bca0365111bd1076df78d4aa'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'pt-BR'


/* Serie exibidas hj */
const { data: todaySeriesData } = await useFetch(`${BASE_URL}/tv/airing_today?language=pt-BR&page=1`, {
  query: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
})

const todaySeriesCards = computed(() => {
  return (
    todaySeriesData.value?.results?.map((serie) => ({
      title: serie.name,
      image: `https://image.tmdb.org/t/p/w500${serie.backdrop_path || serie.poster_path}`,
    })) || []
  )
})

/* Estreiam em Breve */
const { data: upcomingData } = await useFetch(`${BASE_URL}/movie/upcoming?language=pt-BR&page=1`, {
  query: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
})

const upcomingCards = computed(() => {
  return (
    upcomingData.value?.results?.map((movie) => ({
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`,
    })) || []
  )
})


/* Populares */
const { data: popularData } = await useFetch(`${BASE_URL}/movie/popular?language=pt-BR&page=1`, {
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
  }))
})


</script>