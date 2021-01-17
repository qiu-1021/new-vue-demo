<template>
  <div class="register">
	  <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <!-- 登陆表单 -->
    <van-form @submit="onRegister">
    <van-field
      v-model="user.username"
      name="用户名"
      label="用户名"
      placeholder="请输入账号"
      :rules="rules.username"
    />
    <van-field
      v-model="user.nickname"
      name="昵称"
      label="昵称"
      placeholder="请输入昵称"
      :rules="rules.nickname"
    />
    <van-field
      v-model="user.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="请输入密码"
      :rules="rules.password"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">注册</van-button>
    </div>
    <p class="tips">已有账号？去<router-link class="a" to="/login">登陆</router-link></p>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
		      { pattern: /^\d{5,9}$/, message: '请输入5-9位数字账号', trigger: 'onChange' }
        ],
        nickname: [
          { required: true, message: '昵称不能为空', trigger: 'onChange' },
          { pattern: /^[\u4e00-\u9fa5]{2,6}$/, message: '昵称必须为2-6位中文字符', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
		      { pattern: /^\d{3,9}$/, message: '请输入3-9位数字密码', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async onRegister() {
      const res = await this.$axios.post('/register', this.user)
      console.log(res)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        this.$router.push('/login')
      } else {
        this.$toast.fail(message)
      }
    }
  }

}
</script>

<style>

</style>
