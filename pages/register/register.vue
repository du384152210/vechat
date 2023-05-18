<template>
	<view>
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
			<view :class="{'btn fs-16 t-c': true, 'active': emailCheck && password}">注册</view>
		</view>
	</view>
</template>

<script>
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
		}
	}
</script>

<style lang="scss">
.logo {
	width: 96px;
	height: 46px;
}
.form {
	padding: 26px 28px 0;
	.formItem {
		margin-top: 30px;
		position: relative;
		.input {
			padding: 8px 30px 8px 0;
			font-size: 18px;
			border-bottom: 1px solid $uni-border-color;
		}
		.icon {
			position: absolute;
			right: 0;
			top: 8px;
			width: 28px;
			height: 28px;
		}
	}
	.btn {
		margin: 58px auto 0;
		width: 260px;
		padding: 13px 0;
		background: #ccc;
		border-radius: 24px;
		color: #fff;
	}
	.btn.active {
		background: $uni-color-warning;
	}
}
</style>
