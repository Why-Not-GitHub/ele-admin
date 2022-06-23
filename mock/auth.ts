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
    response: () => {
      return {
        code: 0,
        name: '@Last',
        'token|1000000000000008-9999999999999999': 1,
      }
    },
  },
  {
    url: '/auth/getRoutes',
    method: 'post',
    response: () => {
      return [
        {
          /* 项目首页 */
          path: '/',
          name: 'Index',
          component: '../layout/index.vue',
          redirect: '/home',
          meta: {
            title: '主页',
            keepAlive: true,
          },
          children: [
            {
              path: 'home',
              component: '../pages/Index.vue',
              meta: {
                title: '主页',
                keepAlive: true,
              },
            },
          ],
        },
        {
          /* 菜单1 */
          path: '/menu',
          name: 'Menu',
          component: '../layout/index.vue',
          redirect: '/menu/menu11',
          meta: {
            title: '菜单1',
            name: 'Lock',
          },
          children: [
            {
              path: 'menu11',
              component: '../pages/Menu/Menu1/Menu1.vue',
              meta: {
                title: 'menu1-1',
              },
            },
            {
              path: 'menu12',
              component: '../pages/Menu/Menu2/Menu2.vue',
              redirect: '/menu/menu12/menu123',
              meta: {
                title: 'menu1-2',
              },
              children: [
                {
                  path: 'menu123',
                  component: '../pages/Menu/Menu2/Menu3/Menu3.vue',
                  meta: {
                    title: 'menu1-2-3',
                  },
                },
              ],
            },
          ],
        },
      ]
    },
  },
] as MockMethod[]
