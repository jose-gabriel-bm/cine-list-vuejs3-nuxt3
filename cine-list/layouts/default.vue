<template>
  <div> 
    <Header></Header>
    <main class="bg-black bg-opacity-75 min-h-screen pt-12">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
  import Header from '~/components/menus/Header.vue'
</script>
