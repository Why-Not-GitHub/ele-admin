import { defineStore } from 'pinia'
const useLayout = defineStore('layout', {
  state: () => ({
    initailCollapse: true,
  }),
  getters: {
    collapse(state) {
      return state.initailCollapse
    },
  },
  actions: {
    toggleCollapse() {
      this.initailCollapse = !this.initailCollapse
    },
  },
})

export default useLayout
