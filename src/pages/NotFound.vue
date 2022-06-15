<script lang="ts" setup>
import { getToken } from '@/store/userStore'
const user_token = getToken() // 用户登录时暂存的 token
</script>
<template>
  <div :class="['not-found', { cover: !user_token }]">
    <div class="empty-container">
      <el-empty description="404错误，未找到相关页面，请点击下面按钮返回首页">
        <el-link type="primary" href="#/login">返回登录</el-link>
      </el-empty>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  position: relative;
  background-color: #fff;

  .empty-container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}

.cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
