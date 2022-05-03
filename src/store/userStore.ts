import { defineStore } from 'pinia'

const userStore = defineStore('user', {
  state: () => {
    return {
      initUserName: 'Anonymous',
    }
  },
  getters: {
    userName: (state) => state.initUserName,
  },
  actions: {
    updateName(name: string) {
      this.initUserName = name
    },
  },
})

export default userStore
