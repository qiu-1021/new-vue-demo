<template>
  <div class="nav-item" @click="clickFn">
	<div class="title"><slot></slot></div>
	<div class="content"><slot name="content"></slot></div>
	<div class="arrow">
		<span class="iconfont iconjiantou1"></span>
	</div>
  </div>
</template>

<script>
export default {
  methods: {
	clickFn() {
	  if (this.to) {
		this.$router.push(this.to)
	  }
	}
  },
  props: {
	to: String
  }
}
</script>

<style lang="less" scoped>
.nav-item {
  height: 50px;
  display: flex;
  font-size: 14px;
  margin-top: 5px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  margin-left: 10px;
  .content {
	flex: 1;
	text-align: right;
	color: #ccc;
  }
  .arrow {
	margin: 0 5px;
	margin-top: 3px;
  }
}
</style>
