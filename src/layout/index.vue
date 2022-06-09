/* eslint-disable no-unused-vars */
<script lang="ts" setup>
import LayoutMain from '@/layout/components/Main.vue'
import Header from '@/layout/components/Header.vue'
import Aside from '@/layout/components/Aside.vue'
import { useScreenLengthRef } from '@/hooks/useLengthByScreenResizeRaio'

const { width: asideWidth } = useScreenLengthRef({ width: 200 })
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="`${asideWidth > 180 ? asideWidth : 180}px`">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
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
