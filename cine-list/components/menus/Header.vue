<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-transparet">
    <nav class="flex items-center justify-between px-4 py-3 md:px-8 backdrop-blur-sm">
      <div class="text-white text-xl font-bold">CineList</div>
      <ul class="flex items-center gap-6 text-white font-medium text-center">
        <li>
          <NuxtLink to="/" class="cursor-pointer hover:underline" aria-label="Página inicial">
            <HomeIcon class="w-6 h-6" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/favoritos" class="cursor-pointer hover:underline" aria-label="Favoritos">
            <StarIcon class="w-6 h-6 transition-colors" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  import { HomeIcon, StarIcon } from '@heroicons/vue/24/solid'
</script>
