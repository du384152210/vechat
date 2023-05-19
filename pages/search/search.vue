<template>
	<view class="box">
		<view class="search flex f-a-c">
			<input type="text" class="flex1">
			<img src="/static/images/search.png" alt="" class="search_btn">
			<text class="fs-14" @click="back">取消</text>
		</view>
		<scroll-view scroll-y="true" class="search_list">
			<view class="" style="padding: 17px 16px 0;">
				<view class="fs-20 fw-b">用户</view>
				<view>
					<view class="search_row flex f-a-c">
						<img src="" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-ffe">发信息</view>
					</view>
					<view class="search_row flex f-a-c">
						<img src="" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-4a-10 c-4a">加好友</view>
					</view>
				</view>
			</view>
			<view class="" style="padding: 17px 16px 0;">
				<view class="fs-20 fw-b">群组</view>
				<view>
					<view class="search_row flex f-a-c">
						<img src="" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-ffe">发信息</view>
					</view>
					<view class="search_row flex f-a-c">
						<img src="" alt="" class="avatar">
						<text class="fs-18 flex1">asdasda</text>
						<view class="btn bg-4a-10 c-4a">加好友</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
				wx.navigateBack()
			}
		}
	}
</script>

<style lang="scss">
.search {
	position: relative;
	padding: 7px 18px;
	border-bottom: 1px solid #dddddd;
	input {
		height: 30px;
		margin-right: 15px;
		border-radius: 5px;
		background: #F3F4F6;
		padding: 0 35px 0 15px;
		line-height: 30px;
	}
	.search_btn {
		position: absolute;
		width: 20px;
		height: 20px;
		right: 70px;
		top: 50%;
		transform: translate3d(0, -50%, 0);
	}
}
.search_list {
	height: calc(100% - 45px);
	.search_row {
		padding: 10px 0;
		.avatar {
			width: 40px;
			height: 40px;
			border-radius: 10px;
			margin-right: 16px;
		}
		.btn {
			padding: 4px 12px;
			border-radius: 12px;
			font-size: 12px;
		}
	}
}

</style>
