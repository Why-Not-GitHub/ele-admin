import { ConfigEnv, UserConfigExport } from 'vite'
import { resolve } from 'path'

import getVitePluginList from './build/getVitePluginList'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: getVitePluginList(command),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '@/styles/index.scss';
          @use '@/styles/standard.scss' as *;
         `, // 自定义主题，并按需引入
          javascriptEnabled: true,
        },
      },
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
  }
}
