<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import useLayout from '@/store/useLayout'
import { storeToRefs } from 'pinia'

const { collapse } = storeToRefs(useLayout())
</script>
<template>
  <header class="layout-header">
    <div class="toggle-side-bar-icon" @click="useLayout().toggleCollapse()">
      <el-icon v-if="collapse" :size="25">
        <Expand />
      </el-icon>
      <el-icon v-else :size="25">
        <Fold />
      </el-icon>
    </div>
  </header>
</template>

<style scoped lang="scss">
.layout-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
