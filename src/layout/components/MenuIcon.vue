<script setup lang="ts">
import * as Icon from '@element-plus/icons-vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    default: 'Menu',
  },
})
</script>

<template>
  <div class="menu-icon">
    <el-icon>
      <component :is="Icon[iconName]"></component>
    </el-icon>
    <span class="title">
      {{ title }}
    </span>
  </div>
</template>

<style scoped lang="scss"></style>
