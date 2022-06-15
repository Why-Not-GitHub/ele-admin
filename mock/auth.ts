import { MockMethod } from 'vite-plugin-mock'
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
    response: ({ query }) => {
      console.log(query)
      return {
        code: 0,
        data: {
          admin_token: 'get',
        },
      }
    },
  },
] as MockMethod[]
