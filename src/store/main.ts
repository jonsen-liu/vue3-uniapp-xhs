import { defineStore } from 'pinia'

export const useMainStore = defineStore('mian', {
  state: () => {
    return {
      token: '',
      count: 0
    }
  },
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
