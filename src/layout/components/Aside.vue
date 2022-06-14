<script lang="ts" setup>
import LayoutUserTab from '@/layout/components/UserTab.vue'
import router from '@/router'
// import { filterRoutePath } from '@/layout/components/utils'
import MenuItem from '@/layout/components/MenuItem.vue'
import { BaseRoutes } from '@/router'
import { computed, ref } from 'vue'
import useLayout from '@/store/useLayout'
import { storeToRefs } from 'pinia'
import { useScreenLengthRef } from '@/hooks/useLengthByScreenResizeRaio'

const { collapse } = storeToRefs(useLayout())

console.log(BaseRoutes)
const routes = ref(BaseRoutes)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleSelect = (key: string, keyPath: string[]) => {
  console.log('select', key, keyPath)
  router.push({ path: keyPath.join('/').replace('//', '/') })
}
const asideWidth = computed(() => {
  return collapse.value
    ? `${useScreenLengthRef({ width: 76 }).width.value}px`
    : `${useScreenLengthRef({ width: 220 }).width.value}px`
})
</script>
<template>
  <aside class="layout-aside">
    <LayoutUserTab></LayoutUserTab>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse-transition="false"
      :collapse="collapse"
      unique-opened
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <MenuItem v-for="(route, index) in routes" :key="index" :routes-record="route" path="/"></MenuItem>
    </el-menu>
  </aside>
</template>

<style lang="scss" scoped>
.layout-aside {
  position: relative;
  width: v-bind(asideWidth);
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  border-right: 1px solid #eee;
  transition: width 0.2s ease;

  .el-menu-vertical {
    height: calc(100vh - 60px);
    overflow: hidden;
    overflow-y: auto;
  }
}

:deep(.el-menu--collapse .el-menu-item .el-icon) {
  margin-left: -4px !important;
}

:deep(.el-menu) {
  border-right: none;
}
</style>
