import axios from 'axios'
import { ElMessage } from 'element-plus'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BIN_BASE_URL,
  timeout: 5000,
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    config.method = 'post' // 默认方法设置为 post方法
    return config
  },
  function (error) {
    // 对请求错误做些什么
    ElMessage({
      message: '接口访问请求错误',
      type: 'error',
    })
    console.error(error)
    return Promise.reject(error)
  },
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage({
      message: '接口访问返回结果错误',
      type: 'error',
    })
    console.error(error)
    return Promise.reject(error)
  },
)

export default axiosInstance