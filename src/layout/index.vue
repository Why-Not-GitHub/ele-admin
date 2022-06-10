/* eslint-disable no-unused-vars */
<script lang="ts" setup>
import LayoutMain from '@/layout/components/Main.vue'
import Header from '@/layout/components/Header.vue'
import Aside from '@/layout/components/Aside.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <Aside></Aside>
      <el-container>
        <el-header style="border-bottom: 1px solid #eeeeee">
          <Header></Header>
        </el-header>
        <el-main>
          <LayoutMain></LayoutMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss"></style>
