<script lang="ts" setup>
import { Expand, Fold, Menu } from '@element-plus/icons-vue'
import useLayout from '@/store/useLayout'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import authStore from '@/store/authStore'

const router = useRouter()
const { collapse } = storeToRefs(useLayout())
const loading = ref(false)
const logout = async () => {
  loading.value = true
  await authStore().userLogout()
  ElMessage.success({
    message: '正在登出账户',
    duration: 1200,
    onClose() {
      loading.value = false
      router.push('/login')
    },
  })
}
</script>
<template>
  <header class="layout-header flex justify-between items-center">
    <div class="toggle-side-bar-icon" @click="useLayout().toggleCollapse()">
      <el-icon v-if="collapse" :size="25">
        <Expand />
      </el-icon>
      <el-icon v-else :size="25">
        <Fold />
      </el-icon>
    </div>
    <div class="header-right-container">
      <el-dropdown :hide-on-click="false">
        <el-icon>
          <Menu />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">
              <span v-loading="loading">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<style scoped lang="scss">
.layout-header {
  height: 100%;

  & > * {
    cursor: pointer;
    line-height: 100%;
  }
}
</style>
