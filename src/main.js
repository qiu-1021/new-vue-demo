import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入初始化css样式
import './styles/base.css'
// 引入字体图标
import './styles/iconfont.css'
// 导入amfe-flexible
import 'amfe-flexible'
// 导入全局组件
import './utils/global'
// 导入vant
import './utils/vant'
// 导入axios
import axios from 'axios'
// 把axios挂载到vue原型
Vue.prototype.$axios = axios
// 给axios配置默认baseURL，基准地址
axios.defaults.baseURL = 'http://localhost:3000'
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
