import { defineStore } from 'pinia'
const useLayout = defineStore('layout', {
  state: () => ({
    initialCollapse: false,
  }),
  getters: {
    collapse(state) {
      return state.initialCollapse
    },
  },
  actions: {
    toggleCollapse() {
      this.initialCollapse = !this.initialCollapse
    },
  },
})

export default useLayout
