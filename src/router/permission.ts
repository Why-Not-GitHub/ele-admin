import { Router, RouteRecordRaw } from 'vue-router'
import authStore from '@/store/authStore'
import { getRoutes } from '@/api/auth'
import { getToken } from '@/utils/auth'

// @ts-ignore
const modules = import.meta.glob('../pages/**/*.vue')
// @ts-ignore
const layout = import.meta.glob('../layout/**/*.vue')
const combineLayoutAndPages = {
  ...modules,
  ...layout,
}
/**
 * 路由守卫中实现路由权限控制、动态路由
 * @param router
 */
const token = getToken()
export default (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    // console.log(to, from)
    if (token) {
      if (authStore().dynamicRoutes.length === 0) {
        /* generate dynamic routes*/
        console.log('dynamic route')
        const res = await getRoutes()
        const routes = generateRoutes(res.data)
        routes.forEach((route) => {
          router.addRoute(route)
        })
        authStore().updateRoutes(routes)
        next()
      } else {
        next()
      }
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
type RouteRecordResponse = {
  name?: string
  path: string
  component: string
  children?: RouteRecordResponse[]
  redirect?: string
  meta?: ImportMeta
}
/* 简单生成路由树 */
const generateRoutes = (routeResponseData: RouteRecordResponse[]) => {
  const routes: Array<RouteRecordRaw> = []
  routeResponseData.forEach((routeRaw) => {
    if (routeRaw.children !== undefined && routeRaw.children.length > 0) {
      routes.push({
        name: routeRaw.name,
        path: routeRaw.path,
        redirect: routeRaw.redirect,
        component: combineLayoutAndPages[routeRaw.component.replace('@', '..')],
        children: generateRoutes(routeRaw.children),
      })
    } else {
      routes.push({
        name: routeRaw.name,
        path: routeRaw.path,
        redirect: routeRaw.redirect,
        component: combineLayoutAndPages[routeRaw.component.replace('@', '..')],
      })
    }
  })
  return routes
}
