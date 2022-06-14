<script lang="ts" setup>
import { StarFilled } from '@element-plus/icons-vue'
</script>

<template>
  <div class="login-page flex justify-center items-center">
    <div class="login-card flex justify-evenly items-center">
      <h1 class="login-title text-rose-600 text-9xl">ADMIN</h1>
      <el-divider direction="vertical" style="height: 50%">
        <el-icon><StarFilled /></el-icon>
      </el-divider>
      <div class="login-form w-1/3 h-60">
        <h2 class="text-3xl text-cyan-700 -mt-6">Login</h2>
        <el-form class="h-full flex flex-col justify-evenly mt-1">
          <el-form-item>
            <el-input placeholder="账号" size="large"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="密码" size="large" type="password"></el-input>
          </el-form-item>
          <el-button size="large">登录</el-button>
        </el-form>
        <el-link v-show="false" class="-mt-8 ml-1">忘记密码？</el-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  .login-card {
    width: 960px;
    height: 540px;
    //box-shadow: 0 0 20px 10px #eeeeee;
    box-shadow: 0 0 20px 10px $standard-sub-bg-color;
  }
}
</style>
