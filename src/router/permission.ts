import { Router } from 'vue-router'

/**
 * 路由守卫中实现路由权限控制、动态路由
 * @param router
 */
export default function (router: Router) {
  router.beforeEach((to, from, next) => {
    console.log(to, from)
    next()
  })

  router.afterEach(() => {
    // to, from, failure
    console.log('router done')
  })
}
