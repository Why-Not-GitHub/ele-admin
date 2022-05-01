import { defineStore } from 'pinia'

const userStore = defineStore('user', {
  state: () => {
    return {
      name: 'Wenbin'
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
    }
  }
})

export default userStore
