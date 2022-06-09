<script lang="ts" setup>
import { useScreenLengthRef } from '@/hooks/useLengthByScreenResizeRaio'
import LayoutUserTab from '@/layout/components/UserTab.vue'
import router from '@/router'
// import { filterRoutePath } from '@/layout/components/utils'
import MenuItem from '@/layout/components/MenuItem.vue'
import { BaseRoutes } from '@/router'
import { ref } from 'vue'

console.log(BaseRoutes)
const routes = ref(BaseRoutes)
// console.log(filterRoutePath(routes))

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
const { height: maxScrollHeight } = useScreenLengthRef({ height: 890 })
</script>
<template>
  <aside class="layout-aside">
    <LayoutUserTab></LayoutUserTab>
    <el-scrollbar :max-height="maxScrollHeight">
      <el-menu
        default-active="2"
        class="el-menu-vertical"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu
          default-active="2"
          class="el-menu-vertical"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose"
        >
          <MenuItem v-for="(route, index) in routes" :key="index" :routes-record="route" path="/"></MenuItem>
        </el-menu>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  overflow: hidden;
}
</style>
<style scoped lang="scss">
.layout-aside {
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
  border-right: 1px solid #eee;

  .toggle-aside-collapse {
    position: absolute;
    right: 10px;
    top: 20px;
    width: 30px;
    height: 30px;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
