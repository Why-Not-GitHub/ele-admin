import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const BaseRoutes : Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requiredAuth: false,
    },
    component: () => import('@/pages/login.vue'),
  },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '主页',
      keepAlive: true,
      requiredAuth: true,
    },
    component: () => import('@/pages/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: BaseRoutes,
})

export default router
