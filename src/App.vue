<script setup lang="ts">
// 国际化
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

document.title = import.meta.env.VITE_APP_TITLE // 更改浏览器标题
</script>

<template>
  <router-view v-slot="{ Component }">
    <el-config-provider :locale="zhCn">
      <component :is="Component"></component>
    </el-config-provider>
  </router-view>
</template>

<style></style>
