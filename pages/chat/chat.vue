<template>
	<view class="box">
		<view class="navigationBarTitle flex f-j-s f-a-c">
			<view class="back" @click="back"></view>
			<text class="fs-20">开心就好</text>
			<img src="/static/images/avatar.png" alt="" class="avatar">
		</view>
		<scroll-view scroll-y="true" class="content">
			<view class="fs-12 c-9 mb-20 t-c">11月14日 14:23</view>
			<view class="other flex row">
				<img src="/static/images/avatar.png" alt="" class="avatar mr-10">
				<text class="msg">阿三大苏打撒旦是顶顶顶顶顶顶顶顶顶顶顶顶顶</text>
			</view>
			<view class="my flex row">
				<text class="msg">撒大苏打实打实大苏打实打实打算</text>
				<img src="/static/images/avatar.png" alt="" class="avatar ml-10">
			</view>
		</scroll-view>
		<view class="input_box flex f-a-c">
			<img src="/static/images/voice.png" alt="" class="icon mr-10">
			<input type="text" class="flex1">
			<img src="/static/images/emote.png" alt="" class="icon ml-10">
			<img src="/static/images/input_add.png" alt="" class="icon ml-12">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
.navigationBarTitle {
	padding: 12rpx 24rpx;
	border-bottom: 2rpx solid #dddddd;
	.back {
		width: 28rpx;
		height: 28rpx;
		border-top: 4rpx solid #ccc;
		border-left: 4rpx solid #ccc;
		transform: rotate(-45deg);
	}
	.avatar {
		width: 68rpx;
		height: 68rpx;
		border-radius: 16rpx;
	}
}
.content {
	height: calc(100% - 192rpx);
	background: #f5f5f5;
	padding: 32rpx 32rpx 0;
	.row {
		align-items: flex-start;
		margin-top: 40rpx;
		.avatar {
			width: 80rpx;
			height: 80rpx;
			border-radius: 20rpx;
		}
		.msg {
			max-width: 480rpx;
			padding: 16rpx 24rpx;
			font-size: 32rpx;
			color: #000;
		}
	}
	.other {
		.msg {
			border-radius: 0 20rpx 20rpx 20rpx;
			background: #fff;
		}
	}
	.my {
		justify-content: flex-end;
		.msg {
			border-radius: 20rpx 0 20rpx 20rpx;
			background: #FFE431;
		}
	}
}
.input_box {
	padding: 12rpx 36rpx;
	background: #f5f5f5;
	border-top: 2rpx solid #dddddd;
	input {
		background: #ffff;
		height: 72rpx;
		border-radius: 10rpx;
		padding: 0 20rpx;
		line-height: 72rpx;
		font-size: 28rpx;
	}
	.icon {
		width: 56rpx;
		height: 56rpx;
	}
}
</style>
