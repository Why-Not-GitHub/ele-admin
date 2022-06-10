import { defineStore } from 'pinia'
const useLayout = defineStore('layout', {
  state: () => ({
    initialCollapse: true,
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
