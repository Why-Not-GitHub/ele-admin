import { defineStore } from 'pinia'

export interface BreadcrumbRecord {
  name: string
  path: string
}

const initBreadcrumbList: Array<BreadcrumbRecord> = [
  { name: '首页', path: '/' },
  { name: '登录', path: '/login' },
]
const useBreadcrumb = defineStore('breadcrumb', {
  state: () => ({
    initBreadcrumbList: initBreadcrumbList,
  }),
  getters: {
    // automatically infers the return type as a number
    breadcrumbList(state) {
      return state.initBreadcrumbList
    },
  },
})
export default useBreadcrumb
