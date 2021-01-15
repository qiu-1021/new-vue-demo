<template>
  <div>
	<hm-header>登陆</hm-header>
	<hm-logo></hm-logo>
	<!-- 登陆表单 -->
	<van-form @submit="onSubmit">
	<van-field
		v-model="username"
		name="用户名"
		label="用户名"
		placeholder="请输入账号"
		:rules="[{ required: true, message: '请填写用户名' },
		{pattern:/^\d{5,9}$/, message: ''}
		]"
	/>
	<van-field
		v-model="password"
		type="password"
		name="密码"
		label="密码"
		placeholder="请输入密码"
		:rules="[{ required: true, message: '请填写密码' }]"
	/>
	<div style="margin: 16px;">
		<van-button round block type="info" native-type="submit">提交</van-button>
	</div>
	</van-form>
  </div>
</template>

<script>
export default {
  data() {
  	return {
  	username: '',
  	password: ''
  	}
  },
  methods: {
	onLogin() {
	  console.log('登陆')
	}
  }
}
</script>

<style>

</style>
