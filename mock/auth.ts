import { MockMethod } from 'vite-plugin-mock'
import * as mockjs from 'mockjs'
/* MockMethod
{
  // 请求地址
  url: string;
  // 请求方式
  method?: MethodType;
  // 设置超时时间
  timeout?: number;
  // 状态吗
  statusCode?:number;
  // 响应数据（JSON）
  response?: ((opt: { [key: string]: string; body: Record<string,any>; query:  Record<string,any>, headers: Record<string, any>; }) => any) | any;
  // 响应（非JSON）
  rawResponse?: (req: IncomingMessage, res: ServerResponse) => void;
}
*/
export default [
  {
    url: '/auth/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        name: '@Last',
        'token|1000000000000008-9999999999999999': 1,
      }
    },
  },
  {
    url: '/auth/avatar',
    method: 'post',
    response: () => {
      return {
        code: 0,
        data: mockjs.Random.image(),
      }
    },
  },
] as MockMethod[]
