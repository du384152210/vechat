<template>
	<view style="overflow: hidden;">
		<view class="t-c mt-40">
			<img src="/static/images/logo.png" alt="" class="logo">
		</view>
		<view class="form">
			<text class="fs-28">注册</text>
			<view class="formItem">
				<input type="text" placeholder="请输入邮箱" class="input" placeholder-class="c-d" v-model="email" @blur="onEmailBlur">
				<img src="/static/images/check_off.png" alt="" class="icon" v-if="!emailCheck">
				<img src="/static/images/check_on.png" alt="" class="icon" v-else>
			</view>
			<view class="formItem">
				<input :type="!showPassword ? 'password' : 'text'" placeholder="请输入密码" class="input" placeholder-class="c-d" v-model="password">
				<img src="/static/images/eye_on.png" alt="" class="icon" v-if="!showPassword" @click="changePasType">
				<img src="/static/images/eye_off.png" alt="" class="icon" v-else @click="changePasType">
			</view>
			<view :class="{'btn fs-16 t-c': true, 'active': emailCheck && password}" @tap="onSubmit">注册</view>
		</view>
	</view>
</template>

<script>
	import { _register } from '../../API/loginApi.js'
	import { showToast } from '../../utils/util.js'
	export default {
		data() {
			return {
				emailCheck: false,
				showPassword: false,
				email: '',
				password: '',
				emailReg: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
			}
		},
		methods: {
			onEmailBlur() {
				this.emailCheck = this.emailReg.test(this.email)
			},
			changePasType() {
				this.showPassword = !this.showPassword
			},
			onSubmit() {
				if(!this.emailCheck) {
					return ;
				}else if(!this.password) {
					return;
				}else {
					this.register();
				}
			},
			async register() {
				const [err, data] = await this.$http({..._register, data: {
					email: this.email,
					password: this.password
				}})
				if(data.status === 200) {
					uni.showToast({
						title: data.message
					})
					setTimeout(()=> {
						uni.navigateBack()	
					},800)
				}
			}
		}
	}
</script>

<style lang="scss">
.logo {
	width: 192rpx;
	height: 92rpx;
}
.form {
	padding: 52rpx 56rpx 0;
	.formItem {
		margin-top: 60rpx;
		position: relative;
		.input {
			padding: 16rpx 60rpx 16rpx 0;
			font-size: 36rpx;
			border-bottom: 2rpx solid $uni-border-color;
		}
		.icon {
			position: absolute;
			right: 0;
			top: 16rpx;
			width: 56rpx;
			height: 56rpx;
		}
	}
	.btn {
		margin: 116rpx auto 0;
		width: 320rpx;
		padding: 26rpx 0;
		background: #ccc;
		border-radius: 48rpx;
		color: #fff;
	}
	.btn.active {
		background: $uni-color-warning;
	}
}
</style>
