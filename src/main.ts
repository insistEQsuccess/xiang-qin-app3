import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vant/lib/button/style'
// 引入全局样式
import './assets/css/index.scss'
import 'lib-flexible'
// 全局引入按需引入UI库 vant
createApp(App).use(store).use(router).mount('#app')
