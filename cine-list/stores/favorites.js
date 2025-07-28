import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: useStorage('favorites', [])
  }),

  actions: {
    toggleFavorite(filme) {
      const exists = this.items.find(item => item.id === filme.id)
      if (exists) {
        this.items = this.items.filter(item => item.id !== filme.id)
      } else {
        this.items.push({
          id: filme.id,
          title: filme.title,
          image: filme.image
        })
      }
    },

    isFavorite(id) {
      return this.items.some(item => item.id === id)
    }
  }
})
