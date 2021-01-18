<template>
  <div class="user">
    <div class="header">
      <div class="avatar">
        <img :src="$axios.defaults.baseURL + user.head_img" alt="">
      </div>
      <div class="info">
        <span v-if="user.gender === 1" class="iconfont iconxingbienan"></span>
        <span v-else class="iconfont iconxingbienv"></span>
        <span>{{user.nickname}}</span>
        <div class="time">
          {{user.create_date | time}}
        </div>
      </div>
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <hm-navitem to="/myfollow">
      <template>我的关注</template>
      <template #content>关注的用户</template>
    </hm-navitem>
    <hm-navitem to="mycomment">
      <template>我的跟帖</template>
      <template #content>跟帖/回复</template>
    </hm-navitem>
    <hm-navitem to="mystart">
      <template>我的收藏</template>
      <template #content>文章/视频</template>
    </hm-navitem>
    <hm-navitem to="/user-edit">设置</hm-navitem>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  async created() {
    const userId = localStorage.getItem('userId')
    const res = await this.$axios.get(`/user/${userId}`)
    console.log(res)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.user = data
    } else if (statusCode === 401) {
      this.$toast('用户验证失败')
      this.$router.push('/login')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 20px 15px;
  border-bottom: 3px solid #ddd;
  .avatar {
    width: 70px;
    height: 70px;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .info {
    font-size: 14px;
    flex: 1;
    padding-left: 10px;
    .iconxingbienan {
      color: skyblue;
      padding-right: 10px;
    }
    .time {
      padding-top: 5px;
      color: #666;
    }
    .iconxingbienv {
      color: pink;
      padding-right: 10px;
    }
  }
}
</style>
