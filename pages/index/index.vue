<template>
	<view class="box">
		<view class="flex top f-a-c f-j-s">
			<img src="" alt="" class="top_avatar">
			<img src="/static/images/index_logo.png" alt="" class="idx_logo">
			<view class="flex f-a-c">
				<img src="/static/images/search.png" alt="" class="icon" @click="toSearch">
				<img src="/static/images/add.png" alt="" class="icon ml-20">
			</view>
		</view>
		<scroll-view scroll-y class="list">
			<view class="item flex f-a-c" @click="toChat">
				<view style="position: relative;" class="mr-16">
					<img src="" alt="" class="list_avatar">
					<text class="num">2</text>
				</view>
				<view class="flex1">
					<view class="flex f-j-s f-a-c">
						<text class="fs-18">好友请求</text>
						<text class="fs-12 c-9">上午7:45</text>
					</view>
					<text class="fs-14 c-6">就是你的那额，不用点开始速</text>
				</view>
			</view>
		</scroll-view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toSearch() {
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			toChat() {
				uni.navigateTo({
					url:'/pages/chat/chat'
				})
			}
		}
	}
</script>

<style lang="scss">
.top {
	position: relative;
	padding: 4px 16px;
	border-bottom: 1px solid #dddddd;
	.idx_logo {
		position: absolute;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		width: 44px;
		height: 21px;
	}
	.top_avatar {
		width: 34px;
		height: 34px;
		border-radius: 8px;
	}
	
	.icon {
		width: 26px;
		height: 26px;
	}
}

.list {
	height: calc(100% - 43px);
	.item {
		padding: 10px 16px;
		.list_avatar {
			width: 48px;
			height: 48px;
			border-radius: 12px;
		}
		.num {
			position: absolute;
			top: 0;
			right: 0;
			transform: translate3d(50%,-50%,0);
			padding: 0 5px;
			background: $uni-color-error;
			font-size: 12px;
			color: #fff;
			border-radius: 50%;
		}
	}
}

</style>
