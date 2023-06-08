<template>
	<view class="box" :animation="animationData4">
		<image :src="detail.avatar ? detail.avatar : '/static/images/avatar.png'" alt="" class="bg_img" mode="aspectFill" />
		<view class="flex f-a-c f-j-s top">
			<view class="back" @click="back"></view>
			<img src="/static/images/menu.png" alt="" class="menu">
		</view>
		<view class="t-c mt-30">
			<view class="img_box" :animation="animationData2">
				<image :src="detail.avatar ? detail.avatar : '/static/images/avatar.png'" alt="" style="width: 100%;height:100%;" />
				<view :class="{'gender flex f-a-c f-j-c':true, 'female': detail.gender === 2, 'male': detail.gender === 1}">
					<img src="/static/images/sexMale.png" alt="" style="width: 90%;height:90%;" v-if="detail.gender === 1">
					<img src="/static/images/sexFemale.png" alt="" style="width: 90%;height:90%;" v-if="detail.gender === 2">
				</view>
			</view>
			<view class="fs-26 mt-20">{{detail.nickName}}</view>
			<view class="fs-14 mt-6">邮箱：{{detail.email}}</view>
			<view class="mt-10 des">{{detail.signature ? detail.signature : ''}}</view>
		</view>
		<view class="btn fs-16" @tap="addFriendAnimation('up')">加为好友</view>
		
		<view class="pupMask flex" :animation="animationData" style="bottom: -100%;">
			<view class="bg-white container">
				<view class="avatar_box" :animation="animationData3">
					<img :src="detail.avatar ? detail.avatar : '/static/images/avatar.png'" alt="" style="width:100%;height:100%;">
				</view>
				<view class="fs-26">{{detail.nickName}}</view>
				<textarea name="" id="" class="mt-20" placeholder="打招呼~" placeholder-class="c-d" v-model="msg"></textarea>
				<view class="flex f-j-s btns">
					<text class="btn1" @tap="addFriendAnimation('down')">取消</text>
					<text class="btn2" @tap="handleSend">发送</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { _detail, _apply } from '../../API/friendApi.js'
	import { showToast } from '../../utils/util.js'
	export default {
		data() {
			return {
				userId: '',
				detail: {},
				msg: '',
				animationData:{},
				animationData2: {},
				animationData3: {},
				animationData4: {}
			}
		},
		onLoad(option) {
			this.userId = option.id
			this.getDetail()
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			addFriendAnimation(type) {
				let animation = this.initAnimation(0)
				let animation2 = this.initAnimation(0)
				let animation3 = this.initAnimation(300)
				let animation4 = this.initAnimation(0)
				if(type === 'up') {
					animation.bottom(0).step()
					animation2.opacity(0).step()
					animation3.opacity(1).step()
					animation4.backgroundColor('rgba(255,228,49,.6)').step()
				}else {
					animation.bottom('-100%').step()
					animation2.opacity(1).step()
					animation3.opacity(0).step()
					animation4.backgroundColor('rgba(255,228,49,0)').step()
				}
				
				this.animationData = animation.export()
				this.animationData2 = animation2.export()
				this.animationData3 = animation3.export()
				this.animationData4 = animation4.export()
			},
			initAnimation(delay) {
				return uni.createAnimation({
					duration: 500,
					timingFunction: "ease",
					delay
				})
			},
			handleSend() {
				if(!this.msg) {
					return showToast('请输入内容')
				}else {
					this.apply()
				}
			},
			//----------------------api---------------------
			async getDetail() {
				const [err, data] = await this.$http({..._detail, data: {
					id: this.userId
				}})
				this.detail = data.detail
			},
			async apply() {
				const [err, data] = await this.$http({..._apply, data: {
					fid: this.userId,
					msg: this.msg
				}})
				if(data.status === 200) {
					showToast(data.message, 1, () => {
						this.msg = '';
						this.addFriendAnimation('down')
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.box {
	position: relative;
	overflow: hidden;
}
.bg_img {
	z-index: -1;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	filter: blur(16px);
}
.top {
	padding: 20rpx 24rpx;
	.back {
		width: 28rpx;
		height: 28rpx;
		border-top: 4rpx solid #000;
		border-left: 4rpx solid #000;
		transform: rotate(-45deg);
	}
	.menu {
		width: 64rpx;
		height: 64rpx;
	}
}
.img_box {
	z-index: 9999;
	position: relative;
	overflow: hidden;
	display: inline-block;
	width: 400rpx;
	height: 400rpx;
	border-radius: 48rpx;
	border: 6rpx solid #fff;
}
.gender {
	position: absolute;
	right: 16rpx;
	bottom: 16rpx;
	width: 64rpx;
	height: 64rpx;
	border-radius: 50%;
}
.female {
	background: $uni-color-error;
}
.male {
	background: $uni-color-primary;
}
.des {
	text-align: justify;
	padding: 0 100rpx;
	font-size: 24rpx;
}
.btn {
	position: fixed;
	bottom: 8rpx;
	left: 50%;
	transform: translate3d(-50%,0,0);
	width: 682rpx;
	padding: 18rpx 0;
	text-align: center;
	background: $uni-color-warning;
	border-radius: 10rpx;
}
.pupMask {
	position: absolute;
	width: 100%;
	height: 100%;
	align-items: flex-end;
	.container {
		width: 100%;
		position: relative;
		border-radius: 40rpx 40rpx 0 0;
		padding: 168rpx 32rpx 8rpx;
		.avatar_box {
			opacity: 0;
			position: absolute;
			left: 60rpx;
			top: 0;
			transform: translate3d(0, -50%, 0);
			width: 240rpx;
			height: 240rpx;
			border: 6rpx solid #fff;
			border-radius: 50%;
			overflow: hidden;
		}
		textarea {
			width: 100%;
			border-radius: 20rpx;
			padding: 20rpx;
			font-size: 32rpx;
			background: #F3F4F6;
			height: 520rpx;
		}
		.btns {
			margin-top: 90rpx;
			text {
				padding: 18rpx 0;
				border-radius: 10rpx;
				font-size: 32rpx;
				text-align: center;
			}
			.btn1 {
				width: 172rpx;
				background: #ccc;
			}
			.btn2 {
				width: 480rpx;
				background: $uni-color-warning;
			}
		}
	}
}
</style>
