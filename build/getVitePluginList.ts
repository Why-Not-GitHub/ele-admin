import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ElementPlus from 'unplugin-element-plus/vite'
import { viteMockServe } from 'vite-plugin-mock'

export default function getVitePluginList(command: any) {
  const prodMock = true
  return [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass', // required option
        }),
      ],
    }),
    ElementPlus({
      useSource: true,
    }),
    viteMockServe({
      mockPath: 'mock',
      supportTs: true, // 如果使用 js发开，则需要配置 supportTs 为 false
      localEnabled: command === 'serve',
      prodEnabled: command !== 'serve' && prodMock,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      logger: false,
      watchFiles: true,
    }),
  ]
}
