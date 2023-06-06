<template>
	<view class="box">
		<view class="search flex f-a-c">
			<input type="text" class="flex1 fs-14" placeholder="邮箱/昵称" v-model="keyword" @confirm="search"/>
			<img src="/static/images/search.png" alt="" class="search_btn">
			<text class="fs-14" @click="back">取消</text>
		</view>
		<scroll-view scroll-y="true" class="search_list">
			<view class="" style="padding: 17px 16px 0;">
				<view class="fs-20 fw-b">用户</view>
				<view>
					<view class="search_row flex f-a-c">
						<img src="/static/images/avatar.png" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-ffe">发信息</view>
					</view>
					<view class="search_row flex f-a-c">
						<img src="/static/images/avatar.png" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-4a-10 c-4a">加好友</view>
					</view>
				</view>
			</view>
			<view class="" style="padding: 17px 16px 0;">
				<view class="fs-20 fw-b">群组</view>
				<view>
					<view class="search_row flex f-a-c">
						<img src="/static/images/avatar.png" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-ffe">发信息</view>
					</view>
					<view class="search_row flex f-a-c">
						<img src="/static/images/avatar.png" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-4a-10 c-4a">加好友</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import { _search } from '../../API/search.js'
	export default {
		data() {
			return {
				keyword: ''
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			async search() {
				const [err, data] = await this.$http({..._search, data: {
					key: this.keyword
				}})
			}
		}
	}
</script>

<style lang="scss">
.search {
	position: relative;
	padding: 14rpx 36rpx;
	border-bottom: 2rpx solid #dddddd;
	input {
		height: 60rpx;
		margin-right: 30rpx;
		border-radius: 10rpx;
		background: #F3F4F6;
		padding: 0 70rpx 0 30rpx;
		line-height: 60rpx;
	}
	.search_btn {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		right: 140rpx;
		top: 50%;
		transform: translate3d(0, -50%, 0);
	}
}
.search_list {
	height: calc(100% - 90rpx);
	.search_row {
		padding: 20rpx 0;
		.avatar {
			width: 80rpx;
			height: 80rpx;
			border-radius: 20rpx;
			margin-right: 32rpx;
		}
		.btn {
			padding: 8rpx 24rpx;
			border-radius: 24rpx;
			font-size: 24rpx;
		}
	}
}

</style>
