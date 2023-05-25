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
		padding: 20rpx 56rpx;
	}
	.close {
		width: 40rpx;
		height: 40rpx;
	}
	.logo {
		width: 192rpx;
		height: 92rpx;
	}
	.form {
		padding: 52rpx 56rpx 0;
		.input {
			margin-top: 60rpx;
			padding: 16rpx 0;
			font-size: 36rpx;
			border-bottom: 2rpx solid $uni-border-color;
		}
	}
	.btn {
		margin: 116rpx auto 0;
		width: 520rpx;
		padding: 26rpx 0;
		background: $uni-color-warning;
		border-radius: 48rpx;
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
	}
</style>