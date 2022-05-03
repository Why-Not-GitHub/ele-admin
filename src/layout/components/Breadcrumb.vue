<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import useBreadcrumb from '@/store/useBreadcrumb'
import { storeToRefs } from 'pinia'
const breadcrumbStore = useBreadcrumb()
const { breadcrumbList } = storeToRefs(breadcrumbStore)
</script>
<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb-container">
    <el-breadcrumb-item v-for="(bread, index) in breadcrumbList" :key="bread.name + index" :to="{ path: bread.path }">
      {{ bread.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
