<template>
	<view class="box">
		<view class="navigationBarTitle flex f-j-s f-a-c">
			<view class="back" @click="back"></view>
			<text class="fs-20">开心就好</text>
			<img src="" alt="" class="avatar">
		</view>
		<scroll-view scroll-y="true" class="content">
			<view class="fs-12 c-9 mb-20 t-c">11月14日 14:23</view>
			<view class="other flex row">
				<img src="" alt="" class="avatar mr-10">
				<text class="msg">阿三大苏打撒旦是顶顶顶顶顶顶顶顶顶顶顶顶顶</text>
			</view>
			<view class="my flex row">
				<text class="msg">撒大苏打实打实大苏打实打实打算</text>
				<img src="" alt="" class="avatar ml-10">
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
	padding: 6px 12px;
	border-bottom: 1px solid #dddddd;
	.back {
		width: 14px;
		height: 14px;
		border-top: 2px solid #ccc;
		border-left: 2px solid #ccc;
		transform: rotate(-45deg);
	}
	.avatar {
		width: 34px;
		height: 34px;
		border-radius: 8px;
	}
}
.content {
	height: calc(100% - 96px);
	background: #f5f5f5;
	padding: 16px 16px 0;
	.row {
		align-items: flex-start;
		margin-top: 20px;
		.avatar {
			width: 40px;
			height: 40px;
			border-radius: 10px;
		}
		.msg {
			max-width: 240px;
			padding: 8px 12px;
			font-size: 16px;
			color: #000;
		}
	}
	.other {
		.msg {
			border-radius: 0 10px 10px 10px;
			background: #fff;
		}
	}
	.my {
		justify-content: flex-end;
		.msg {
			border-radius: 10px 0 10px 10px;
			background: #FFE431;
		}
	}
}
.input_box {
	padding: 6px 18px;
	background: #f5f5f5;
	border-top: 1px solid #dddddd;
	input {
		background: #ffff;
		height: 36px;
		border-radius: 5px;
		padding: 0 10px;
		line-height: 36px;
		font-size: 14px;
	}
	.icon {
		width: 28px;
		height: 28px;
	}
}
</style>
