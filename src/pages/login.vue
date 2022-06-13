<script lang="ts" setup>
import request from '@/request'
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  const get = await request({
    url: '/api/get',
    method: 'get',
  })
  console.log(get)
  const post = await request({
    url: '/api/post',
    method: 'post',
  })
  console.log(post)
  const text = await request({
    url: '/api/text',
    method: 'post',
  })
  console.log(text)
})
</script>

<template>
  <div class="login-page">
    <el-button>登录</el-button>
  </div>
</template>

<style scoped lang="scss"></style>
