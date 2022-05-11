<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue'
import useLayout from '@/store/useLayout'
import { storeToRefs } from 'pinia'

const useLayoutRefs = storeToRefs(useLayout())
</script>

<template>
  <el-button circle plain @click="useLayout().toggleCollapse()">
    <template #icon>
      <el-icon :class="['arrow', { 'arrow-right': useLayoutRefs.collapse.value }]">
        <arrow-left-bold />
      </el-icon>
    </template>
  </el-button>
</template>

<style lang="scss" scoped>
button:focus {
  outline: none !important;
}

.arrow {
  transition: all 0.3s ease;
}

.arrow-right {
  transform: rotate(180deg);
}
</style>
