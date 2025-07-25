<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
      <ExclamationTriangleIcon class="mx-auto h-12 w-12 text-yellow-500 mb-4" />
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Login necessário</h1>
      <p class="text-gray-600">Você foi redirecionado porque não está logado.</p>
    </div>
  </div>
</template>

<script setup>
  import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'

  definePageMeta({
    layout: 'login'
  })

</script>
