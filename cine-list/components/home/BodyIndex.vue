<template>
  <CardCarousel title="Populares" :items="popularCards"/>
  <CardCarousel title="Estreiam em Breve" :items="upcomingCards"/>
  <CardCarousel title="Mais Bem Avaliados" :items="topRated"/>
</template>
<script setup>

import CardCarousel from '~/components/ui/CardCarousel.vue'

const API_KEY = 'beed4e65bca0365111bd1076df78d4aa'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'pt-BR'


/* Top Rated*/
const { data: topRatedData } = await useFetch(`${BASE_URL}/movie/top_rated?language=pt-BR&page=1`, {
  query: {
    api_key: API_KEY,
    language: LANGUAGE,
  },
})

const topRated = computed(() => {
  return (
    topRatedData.value?.results?.map((rated) => ({
      title: rated.title,
      image: `https://image.tmdb.org/t/p/w500${rated.backdrop_path || rated.poster_path}`,
      link: `/item/${rated.id}`,
      id:rated.id
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
      link: `/item/${movie.id}`,
      id:movie.id
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
    link: `/item/${movie.id}`,
    id:movie.id
  }))
})


</script>