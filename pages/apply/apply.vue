<template>
	<view class="box">
		<view class="flex f-a-c f-j-s top">
			<view class="back" @click="back"></view>
			<img src="/static/images/menu.png" alt="" class="menu">
		</view>
		<view class="bg-white container">
			<view class="avatar_box">
				<img src="/static/images/avatar.png" alt="" style="width:100%;height:100%;">
			</view>
			<view class="fs-26">hhhhhh</view>
			<textarea name="" id="" class="mt-20" placeholder="打招呼~" placeholder-class="c-d"></textarea>
			<view class="flex f-j-s btns">
				<text class="btn1">取消</text>
				<text class="btn2">发送</text>
			</view>
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

<style lang="scss" scoped>
.box {
	background: rgba(255,228,49,0.6);
}
.top {
	padding: 10px 12px;
	.back {
		width: 14px;
		height: 14px;
		border-top: 2px solid #000;
		border-left: 2px solid #000;
		transform: rotate(-45deg);
	}
	.menu {
		width: 32px;
		height: 32px;
	}
}
.container {
	position: relative;
	margin-top: 98px;
	border-radius: 20px 20px 0 0;
	padding: 84px 16px 4px;
	height: calc(100% - 150px);
	.avatar_box {
		position: absolute;
		left: 30px;
		top: 0;
		transform: translate3d(0, -50%, 0);
		width: 120px;
		height: 120px;
		border: 3px solid #fff;
		border-radius: 50%;
		overflow: hidden;
	}
	textarea {
		width: 100%;
		border-radius: 10px;
		padding: 10px;
		font-size: 16px;
		background: #F3F4F6;
		height: 260px;
	}
	.btns {
		margin-top: 45px;
		text {
			padding: 9px 0;
			border-radius: 5px;
			font-size: 16px;
			text-align: center;
		}
		.btn1 {
			width: 86px;
			background: #ccc;
		}
		.btn2 {
			width: 240px;
			background: $uni-color-warning;
		}
	}
}
</style>
