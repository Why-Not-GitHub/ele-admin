<script setup lang="ts">
import { RouteRecord } from 'vue-router'
import MenuIcon from '@/layout/components/MenuIcon.vue'

const props = defineProps({
  routesRecord: {
    type: Object,
    default: (): RouteRecord => {
      return { path: '#', name: '' } as RouteRecord
    },
  },
  path: {
    type: String,
    default: '',
  },
})

const resolvePath = (subPath: string): string => {
  return props.path !== '' && props.path !== '/' ? props.path + '/' + subPath : subPath
}
</script>

<template>
  <!--  单一一级路由，没有子路由-->
  <el-menu-item
    v-if="routesRecord.children === undefined || routesRecord.children.length === 0"
    :index="routesRecord.path"
  >
    <template #title>
      <MenuIcon :title="routesRecord.meta.title" :icon-name="routesRecord.meta.name"></MenuIcon>
    </template>
  </el-menu-item>
  <!--  多级路由，包含子路由-->
  <el-sub-menu v-else :index="resolvePath(routesRecord.path)">
    <template #title>
      <MenuIcon :title="routesRecord.meta.title" :icon-name="routesRecord.meta.name"></MenuIcon>
    </template>
    <MenuItem v-for="childRoute in routesRecord.children" :key="childRoute.path" :routes-record="childRoute">
    </MenuItem>
  </el-sub-menu>
</template>

<style scoped lang="scss"></style>
