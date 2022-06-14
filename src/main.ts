import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import { setRootFontSize } from '@/utils/setRootFontSize'
/* 引入 Tailwind*/
import '@/styles/tailwind.css'

setRootFontSize()
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
