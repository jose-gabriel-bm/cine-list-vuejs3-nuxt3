import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    items: []
  }),
  actions: {
    toggleFavorite(id) {
      if (this.items.includes(id)) {
        this.items = this.items.filter(item => item !== id)
      } else {
        this.items.push(id)
      }
    },
    isFavorite(id) {
      return this.items.includes(id)
    }
  }
})
