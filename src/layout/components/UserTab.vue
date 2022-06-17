<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { getUsername } from '@/store/authStore'
const userName = getUsername()
</script>
<template>
  <div class="layout-user-tab">
    <div class="avatar">
      <el-avatar shape="square" :icon="UserFilled" />
    </div>
    <div class="user-options">{{ userName }}</div>
  </div>
</template>

<style scoped lang="scss">
.layout-user-tab {
  padding: 0 5px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .avatar {
    margin: 0 1em;
  }
  .user-options {
    width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }
}
</style>
