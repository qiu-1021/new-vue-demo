import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入初始化css样式
import './styles/base.css'
// 引入字体图标
import './styles/iconfont.css'
// 导入amfe-flexible
import 'amfe-flexible'
// 按需加载vant组件
import { Button } from 'vant'
// 全局注册组件
import HmHeader from './components/HmHeader.vue'

Vue.component('hm-header', HmHeader)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
