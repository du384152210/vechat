<template>
	<view>
		<view class="t-c mt-40">
			<img src="/static/images/logo.png" alt="" class="logo">
		</view>
		<view class="form">
			<text class="fs-28">登录</text>
			<view class="fs-20 c-9 mt-6">您好，欢迎来到vechat!</view>
			<input type="text" placeholder="请输入邮箱" class="input" placeholder-class="c-d" v-model="email">
			<input type="password" placeholder="请输入密码" class="input" placeholder-class="c-d" v-model="password">
			<view class="btn fs-16 t-c" @tap="submit">登录</view>
			<view class="t-c mt-24" @tap="toRegister">还没账号? <text class="c-4a">前往注册</text></view>
		</view>
	</view>
</template>

<script>
	import { showToast } from '../../utils/util.js'
	import { _login } from '../../API/loginApi.js'
	export default {
		data() {
			return {
				email: 'admin@g.com',
				password: 'admin',
				emailReg: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
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
			submit() {
				if(!this.email) {
					return showToast('请输入邮箱地址！')
				}else if(!this.emailReg.test(this.email)) {
					return showToast('请输入正确的邮箱地址！')
				}else if(!this.password) {
					return showToast('请输入密码！')
				}else {
					this.login();
				}
			},
			async login() {
				const [err, data] = await this.$http({..._login, data: {
					email: this.email,
					password: this.password
				}})
				if(data.status === 200) {
					showToast(data.message, 1);
					uni.setStorageSync('token', data.token);
					uni.setStorageSync('id', data.id);
					setTimeout(()=> {
						uni.navigateBack()
					},500)
				}
			}
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