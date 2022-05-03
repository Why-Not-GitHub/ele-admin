import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(
        {
          importStyle: 'sass', // required option
        },
      )],
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
         @use "@/styles/index.scss";
         `, // 自定义主题，并按需引入
        javascriptEnabled: true,
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8080,
    open: true,
  },
})
