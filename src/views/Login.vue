<template>
  <div>
	<hm-header>登陆</hm-header>
	<hm-logo></hm-logo>
	<!-- 登陆表单 -->
	<van-form @submit="onLogin">
	<van-field
		v-model="username"
		name="用户名"
		label="用户名"
		placeholder="请输入账号"
		:rules="rules.username"
	/>
	<van-field
		v-model="password"
		type="password"
		name="密码"
		label="密码"
		placeholder="请输入密码"
		:rules="rules.password"
	/>
	<div style="margin: 16px;">
		<van-button round block type="info" native-type="submit">登陆</van-button>
	</div>
	<p class="tips">没有账号？去<router-link class="a" to="/register">注册</router-link></p>
	</van-form>
  </div>
</template>

<script>
export default {
  created() {
	console.log(this.$route.params)
	const { username, password } = this.$route.params
	this.username = username
	this.password = password
  },
  data() {
  	return {
  	  username: '',
	  password: '',
	  rules: {
		username: [
		  { required: true, message: '请填写用户名', trigger: 'onChange' },
		  { pattern: /^\d{5,9}$/, message: '请输入5-9位数字账号', trigger: 'onChange' }
		],
		password: [
		  { required: true, message: '请填写密码', trigger: 'onChange' },
		  { pattern: /^\d{3,9}$/, message: '请输入5-9位数字密码', trigger: 'onChange' }
		]
	  }
  	}
  },
  methods: {
	async onLogin() {
	  const res = await this.$axios.post('/login', {
		username: this.username,
		password: this.password
	  })
	  console.log(res)
	  const { statusCode, message, data } = res.data
	  if (statusCode === 200) {
		this.$toast.success(message)
		// 保存token
		localStorage.setItem('token', data.token)
		localStorage.setItem('userId', data.user.id)
		// 跳转个人中心
		this.$router.push({
		  path: '/user'
		})
	  } else {
		this.$toast.fail(message)
	  }
	}
  }
}
</script>

<style lang="less">
  .tips {
	font-size: 14px;
	padding: 20px;
	text-align: right;
	.a {
	  color: orange;
	}
  }
</style>
