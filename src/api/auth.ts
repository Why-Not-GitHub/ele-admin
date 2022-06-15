import request from '@/request'

type LoginParams = {
  userName: string // 用户名
  password: string // 密码
}

export const authLogin = (data: LoginParams) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}
