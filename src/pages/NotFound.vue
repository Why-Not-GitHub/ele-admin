<script lang="ts" setup></script>
<template>
  <div class="not-found">
    <div class="empty-container">
      <el-empty description="404错误，未找到相关页面，请点击下面按钮返回首页">
        <el-link type="primary" href="#/home">返回首页</el-link>
      </el-empty>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;

  .empty-container {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}
</style>
