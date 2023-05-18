<template>
	<view>
		<view class="top flex f-j-s f-a-c">
			<img src="/static/images/close.png" alt="" class="close">
			<text class="fs-18" @click="toRegister">注册</text>
		</view>
		<view class="t-c mt-40">
			<img src="/static/images/logo.png" alt="" class="logo">
		</view>
		<view class="form">
			<text class="fs-28">登录</text>
			<view class="fs-20 c-9 mt-6">您好，欢迎来到vechat!</view>
			<input type="text" placeholder="请输入账号" class="input" placeholder-class="c-d">
			<input type="password" placeholder="请输入密码" class="input" placeholder-class="c-d">
			<view class="btn fs-16 t-c">登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
	
		},
		methods: {
			toRegister() {
				uni.navigateTo({
					url: '/pages/register/register'
				})
			},
		}
	}
</script>

<style lang="scss">
	.top {
		padding: 10px 28px;
	}
	.close {
		width: 20px;
		height: 20px;
	}
	.logo {
		width: 96px;
		height: 46px;
	}
	.form {
		padding: 26px 28px 0;
		.input {
			margin-top: 30px;
			padding: 8px 0;
			font-size: 18px;
			border-bottom: 1px solid $uni-border-color;
		}
	}
	.btn {
		margin: 58px auto 0;
		width: 260px;
		padding: 13px 0;
		background: $uni-color-warning;
		border-radius: 24px;
		box-shadow: 0px 25px 16px -18px rgba(255,228,49,0.4);
	}
</style>