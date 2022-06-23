import { defineStore } from 'pinia'
import { authLogin } from '@/api/auth'
import { RouteRecordRaw } from 'vue-router'
import router from '@/router/index'
import { setToken, setUsername } from '@/utils/auth'

const authStore = defineStore('user', {
  state: () => {
    const routes: Array<RouteRecordRaw> = [] // 初始为空
    return {
      routes,
    }
  },
  getters: {
    dynamicRoutes(state) {
      return state.routes
    },
  },
  actions: {
    async userLogin(params: AuthLoginParams) {
      const res = await authLogin(params)
      setToken(res.data.token)
      setUsername(res.data.name)
    },
    async updateRoutes(newRoute: Array<RouteRecordRaw>) {
      this.routes = newRoute
    },
    userLogout() {
      this.routes.forEach((item: RouteRecordRaw) => {
        if (item.name) router.removeRoute(item.name)
      })
      this.routes = []
    },
  },
})

export default authStore
