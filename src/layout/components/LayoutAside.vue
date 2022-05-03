<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { useScreenLengthRef } from '@/hooks/useLengthByScreenResizeRaio'
import LayoutUserTab from '@/layout/components/LayoutUserTab.vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const { height: maxScrollHeight } = useScreenLengthRef({ height: 890 })
</script>
<template>
  <aside class="layout-aside">
    <LayoutUserTab></LayoutUserTab>
    <el-scrollbar :max-height="maxScrollHeight">
      <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <icon-menu />
          </el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <Document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon>
            <icon-menu />
          </el-icon>
          <template #title>Navigator Five</template>
        </el-menu-item>
        <el-menu-item index="6" disabled>
          <el-icon>
            <Document />
          </el-icon>
          <template #title>Navigator Six</template>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Seven</template>
        </el-menu-item>
        <el-menu-item index="8">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>Navigator Eight</template>
        </el-menu-item>
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
