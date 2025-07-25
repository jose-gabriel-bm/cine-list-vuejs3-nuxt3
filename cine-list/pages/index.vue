<template>
  <div class="p-4">
    <ImageCarousel :images="carouselImages" />
    <BodyIndex/>

  </div>
</template>

<script setup>
import ImageCarousel from '~/components/ui/ImageCarousel.vue'
import BodyIndex from '~/components/home/BodyIndex.vue'

const API_KEY = 'beed4e65bca0365111bd1076df78d4aa'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'pt-BR'

const fetchOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

/* filmes em cartaz */
const {
  data: nowPlayingData
} = await useFetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`, fetchOptions)

/* Fetch dos gêneros */
const {
  data: genresData
} = await useFetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`, fetchOptions)

/* Mapeia id de gênero para nome */
const genreMap = computed(() => {
  return genresData.value?.genres?.reduce((acc, genre) => {
    acc[genre.id] = genre.name
    return acc
  }, {}) || {}
})

/* Prepara os dados para o carrossel */
const carouselImages = computed(() => {
  return nowPlayingData.value?.results
    ?.filter(filme => filme.backdrop_path)
    ?.map(filme => ({
      src: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${filme.backdrop_path}`,
      title: filme.title,
      subtitle: filme.genre_ids
        .map(id => genreMap.value[id])
        .filter(Boolean)
    })) || []
})
</script>
