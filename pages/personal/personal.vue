<template>
	<view class="box">
		<view class="nav">
			<view class="flex row f-j-s f-a-c" style="padding:20rpx 32rpx;">
				<view class="flex f-a-c">
					<text class="fs-16">头像</text>
					<img src="/static/images/avatar.png" alt="" class="avatar">
				</view>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">签名</text>
				<text class="flex1 ellipsis c-9">看没看懂阿凡达，的局啊地卡斯蒂略噩…</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">注册</text>
				<text class="flex1 ellipsis c-9">2019-12-22 13:32:45</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">昵称</text>
				<text class="flex1 ellipsis c-9">看阿凡达</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">性别</text>
				<text class="flex1 ellipsis c-9">男</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">生日</text>
				<text class="flex1 ellipsis c-9">1996-12-23</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">电话</text>
				<text class="flex1 ellipsis c-9">12383347864</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">邮箱</text>
				<text class="flex1 ellipsis c-9">12765384@qq.com</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">密码</text>
				<text class="flex1 ellipsis c-9">.....</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
		</view>
		<view class="c-ff5 fs-16 t-c mt-40">退出应用</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.row {
	padding: 32rpx;
	border-bottom: 2rpx dashed #dddddd;
}
.avatar {
	width: 108rpx;
	height: 108rpx;
	border-radius: 20rpx;
	margin-left: 32rpx;
}
.arrow {
	width: 28rpx;
	height: 28rpx;
}
</style>
