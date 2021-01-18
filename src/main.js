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
import { Toast } from 'vant'
// 导入时间处理函数
import './utils/filter'
// 导入axios
import axios from 'axios'
// 把axios挂载到vue原型
Vue.prototype.$axios = axios
// 给axios配置默认baseURL，基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// 设置axios请求拦截器
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})
// 设置axios响应拦截器
axios.interceptors.response.use(function(response) {
  const { statusCode, message } = response.data
  if (statusCode === 401 && message === '用户验证信息失败') {
    // console.log('token失效')
    // 跳转登陆页面
    router.push('/login')
    // 清除失败信息
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    // 给提示 用户验证失败
    Toast.fail('登陆信息失败')
  }
  return response
})
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
