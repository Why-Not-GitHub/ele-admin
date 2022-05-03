<script setup lang="ts">
// 国际化
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import Layout from '@/layout/index.vue'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <Layout></Layout>
  </el-config-provider>
</template>

<style></style>
