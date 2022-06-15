import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routerGuardSetter from './permission'
import Layout from '@/layout/index.vue'

export const BaseRoutes: Array<RouteRecordRaw> = [
  {
    /* 项目首页 */
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '主页',
      keepAlive: true,
    },
    children: [
      {
        path: 'home',
        component: () => import('@/pages/Index.vue'),
        meta: {
          title: '主页',
          keepAlive: true,
        },
      },
    ],
  },
  {
    /* 页面错误处理 */
    path: '/error',
    name: 'Error',
    component: Layout,
    redirect: '/error/404',
    meta: {
      hidden: true,
      title: '错误处理',
    },
    children: [
      {
        /* 404 页面*/
        path: '404',
        name: '404',
        component: () => import('@/pages/NotFound.vue'),
        meta: {
          hidden: true,
        },
      },
    ],
  },
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
    /* 菜单1 */
    path: '/menu',
    name: 'Menu',
    component: Layout,
    redirect: '/menu/menu11',
    meta: {
      title: '菜单1',
      name: 'Lock',
    },
    children: [
      {
        path: 'menu11',
        component: () => import('@/pages/Menu/Menu1/Menu1.vue'),
        meta: {
          title: 'menu1-1',
        },
      },
      {
        path: 'menu12',
        component: () => import('@/pages/Menu/Menu2/Menu2.vue'),
        redirect: '/menu/menu12/menu123',
        meta: {
          title: 'menu1-2',
        },
        children: [
          {
            path: 'menu123',
            component: () => import('@/pages/Menu/Menu2/Menu3/Menu3.vue'),
            meta: {
              title: 'menu1-2-3',
            },
          },
        ],
      },
    ],
  },
  {
    /* hash模式下：捕获项目无法确定路由的页面，对用户展示404页面 */
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/error/404',
    component: Layout,
    meta: {
      hidden: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: BaseRoutes,
})
routerGuardSetter(router)
export default router
