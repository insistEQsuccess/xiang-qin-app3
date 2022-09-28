import { createApp } from 'vue'
import { Calendar, Cascader, Popup } from 'vant';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 引入全局样式
import 'vant/lib/index.css';
import './assets/css/index.scss'
import 'lib-flexible'
// 全局引入按需引入UI库 vant
const app = createApp(App)
app.use(Calendar)
app.use(Cascader)
app.use(Popup)
app.use(store).use(router).mount('#app')
