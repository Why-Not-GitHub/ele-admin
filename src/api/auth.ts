import request from '@/request'

export const authLogin = (data: AuthLoginParams) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}
