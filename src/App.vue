<script setup lang="ts">
// 国际化
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <router-view v-slot="{ Component }">
    <el-config-provider :locale="zhCn">
      <component :is="Component"></component>
    </el-config-provider>
  </router-view>
</template>

<style></style>
