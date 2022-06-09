/*
 * 处理 layout 组件 工具方法
 * */
import { RouteRecordNormalized } from 'vue-router'

export const filterRoutePath = (routes: RouteRecordNormalized[]): RouteRecordNormalized[] => {
  console.log(routes)
  return routes.filter((route) => !route.meta.hidden)
}
