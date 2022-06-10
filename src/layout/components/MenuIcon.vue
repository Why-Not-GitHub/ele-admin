<script setup lang="ts">
import * as Icon from '@element-plus/icons-vue'

defineProps({
  iconName: {
    type: String,
    default: 'Menu',
  },
})
</script>

<template>
  <el-icon>
    <component :is="Icon[iconName]"></component>
  </el-icon>
</template>

<style scoped lang="scss"></style>
