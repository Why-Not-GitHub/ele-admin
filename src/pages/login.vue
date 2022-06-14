<script lang="ts" setup>
import { StarFilled } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const loading = ref(false)

const loginFormState = reactive({
  password: 'admin',
  userName: 'admin',
})

const login = () => {
  const messageDuration = 800
  loading.value = true
  if (loginFormState.userName === '') {
    ElMessage.warning({
      message: '请输入账号',
      duration: messageDuration,
    })
  } else if (loginFormState.password === '') {
    ElMessage.warning({
      message: '请输入密码',
      duration: messageDuration,
    })
  } else {
    ElMessage.success({
      message: '登陆成功',
      duration: messageDuration,
      onClose() {
        router.push('/')
        loading.value = false
      },
    })
  }
}
</script>

<template>
  <div class="login-page flex justify-center items-center">
    <div class="login-card flex justify-evenly items-center">
      <div class="login-card-left">
        <img class="login-title" src="../assets/login/login-title.png" alt="designed by Cheng Si" />
        <el-link class="img-description">@今煕</el-link>
      </div>
      <el-divider direction="vertical" style="height: 60%">
        <el-icon>
          <StarFilled />
        </el-icon>
      </el-divider>
      <div class="login-form w-1/3 h-60">
        <div class="text-3xl text-cyan-700 -mt-3">ele-admin</div>
        <el-form class="h-full flex flex-col justify-evenly mt-1">
          <el-form-item>
            <el-input v-model:model-value="loginFormState.userName" placeholder="账号" size="large"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model:model-value="loginFormState.password"
              placeholder="密码"
              size="large"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-button v-loading="loading" size="large" type="primary" @click="login">登录</el-button>
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
    box-shadow: 0 0 20px 1px $standard-bg-color;

    .login-card-left {
      position: relative;

      .login-title {
        width: 510px;
        height: 340px;
      }

      .img-description {
        position: absolute;
        left: 25px;
        bottom: -25px;
        font-size: 13px;
        color: #c6c6c6;
        text-decoration-color: #c6c6c6;
      }
    }
  }
}

.el-link.is-underline:hover:after {
  border-bottom-color: #aaaaaa;
}
</style>
