import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

const TOKEN = 'user_token'

export const getToken = function () {
  return Cookies.get(TOKEN)
}

export const setToken = function (token: string) {
  return Cookies.set(TOKEN, token, { expires: 7 }) // expires after 7 days
}

export const removeToken = function () {
  return Cookies.remove(TOKEN)
}

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
