<template>
	<view class="box" :animation="animationData4">
		<image src="/static/images/avatar.png" alt="" class="bg_img" mode="aspectFill" />
		<view class="flex f-a-c f-j-s top">
			<view class="back" @click="back"></view>
			<img src="/static/images/menu.png" alt="" class="menu">
		</view>
		<view class="t-c mt-30">
			<view class="img_box" :animation="animationData2">
				<img src="/static/images/avatar.png" alt="" style="width: 100%;height:100%;" >
				<view class="sex flex f-a-c f-j-c">
					<img src="/static/images/sexFemale.png" alt="" style="width: 90%;height:90%;">
				</view>
			</view>
			<view class="fs-26 mt-24">hhhhhh</view>
			<view class="fs-14">昵称：很好搭档</view>
			<view class="mt-10 des">夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。</view>
		</view>
		<view class="btn fs-16" @tap="addFriendAnimation('up')">加为好友</view>
		
		<view class="mask flex" :animation="animationData" style="bottom: -100%;">
			<view class="bg-white container">
				<view class="avatar_box" :animation="animationData3">
					<img src="/static/images/avatar.png" alt="" style="width:100%;height:100%;">
				</view>
				<view class="fs-26">hhhhhh</view>
				<textarea name="" id="" class="mt-20" placeholder="打招呼~" placeholder-class="c-d"></textarea>
				<view class="flex f-j-s btns">
					<text class="btn1" @tap="addFriendAnimation('down')">取消</text>
					<text class="btn2">发送</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animationData:{},
				animationData2: {},
				animationData3: {},
				animationData4: {}
			}
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
.sex {
	position: absolute;
	right: 16rpx;
	bottom: 16rpx;
	width: 64rpx;
	height: 64rpx;
	border-radius: 50%;
	background: $uni-color-error;
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
.mask {
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
