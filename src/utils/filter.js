// 导入时间处理函数
// 导入vue
import Vue from 'vue'
import moment from 'moment'

Vue.filter('time', (input, str = 'YYYY-MM-DD') => {
  return moment(input).format(str)
})
