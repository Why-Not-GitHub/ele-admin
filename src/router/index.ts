import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/pages/NotFound.vue'

export const BaseRoutes: Array<RouteRecordRaw> = [
  {
    /* 项目首页 */
    path: '/',
    name: 'Index',
    component: () => import('@/layout/index.vue'),
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
    component: () => import('@/layout/index.vue'),
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

router.beforeEach((to, from, next) => {
  if (to.path === from.path) return
  next()
})

export default router
