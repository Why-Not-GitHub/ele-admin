import { Router } from 'vue-router'
import { getToken } from '@/store/authStore'

/**
 * 路由守卫中实现路由权限控制、动态路由
 * @param router
 */
const token = getToken()
export default function (router: Router) {
  router.beforeEach((to, from, next) => {
    // console.log(to, from)
    if (token) {
      next()
    } else {
      if (to.path === '/login') {
        // 避免跳转路径为 /login 时出现无限循环路由跳转
        next()
      } else {
        next('/login')
      }
    }
  })

  router.afterEach(() => {
    // to, from, failure
    // console.log('router done')
  })
}
