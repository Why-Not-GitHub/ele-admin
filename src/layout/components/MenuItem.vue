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
  <template v-if="!routesRecord.meta?.hidden">
    <el-menu-item
      v-if="routesRecord.children === undefined || routesRecord.children.length === 0"
      :index="routesRecord.path"
    >
      <MenuIcon :icon-name="routesRecord.meta.name"></MenuIcon>
      <template #title>
        {{ routesRecord.meta.title }}
      </template>
    </el-menu-item>
    <!-- 仅包含一个子路由的二级路由将其向上提升一个路由层级-->
    <el-menu-item v-else-if="routesRecord.children.length === 1" :index="routesRecord.path">
      <MenuIcon :icon-name="routesRecord.children[0].meta.name"></MenuIcon>
      <template #title>
        {{ routesRecord.children[0].meta.title }}
      </template>
    </el-menu-item>
    <!--  多级路由，包含子路由-->
    <el-sub-menu v-else :index="resolvePath(routesRecord.path)">
      <template #title>
        <MenuIcon :icon-name="routesRecord.meta.name"></MenuIcon>
        <span>{{ routesRecord.meta.title }}</span>
      </template>
      <MenuItem v-for="childRoute in routesRecord.children" :key="childRoute.path" :routes-record="childRoute">
      </MenuItem>
    </el-sub-menu>
  </template>
</template>

<style scoped lang="scss"></style>
