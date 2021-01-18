import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login', component: Login, name: 'login'
  },
  {
    path: '/register', component: Register, name: 'register'
  },
  {
    path: '/user', component: User, name: 'user'
  }
]
// 全局的把push的异常给处理了
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})
// 路由前置守卫
const token = localStorage.getItem('token')
router.beforeEach(function(to, from, next) {
  if (to.name !== 'user' || token) {
    next()
  } else {
    router.push('/login')
  }
})

export default router
