import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/pages/NotFound.vue'

const Layout = () => {
  import('@/layout/index.vue')
}
const BaseRoutes: Array<RouteRecordRaw> = [
  {
    /* 项目登录页 */
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      title: '登录',
      keepAlive: true,
      requiredAuth: false,
      hidden: true,
    },
  },
  {
    /* 项目首页 */
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/Index.vue'),
    meta: {
      title: '主页',
      keepAlive: true,
      requiredAuth: true,
      hidden: true,
    },
  },
  {
    /* 项目首页 */
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '主页',
      keepAlive: true,
      requiredAuth: true,
      hidden: true,
    },
  },
  {
    /* 404 页面*/
    path: '/404',
    name: '404',
    component: () => {
      import('@/pages/NotFound.vue')
    },
    meta: {
      hidden: true,
    },
  },
  {
    /* hash模式下：捕获项目无法确定路由的页面，对用户展示404页面 */
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      hidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: BaseRoutes,
})

export default router
