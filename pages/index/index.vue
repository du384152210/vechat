<template>
	<view class="box" style="padding-top:  var(--status-bar-height)">
		<view class="mask" v-if="isShow" @tap="hideAdd"></view>
		<view class="flex top f-a-c f-j-s">
			<image src="/static/images/avatar.png" alt="" class="top_avatar" />
			<image src="/static/images/index_logo.png" alt="" class="idx_logo" />
			<view class="flex f-a-c" style="position: relative;">
				<image src="/static/images/search.png" alt="" class="icon" @tap="toSearch" />
				<image src="/static/images/add.png" alt="" class="icon ml-20" @tap="showAdd"/>
				<view class="tip" :animation="animationData">
					<view class="triangle"></view>
					<view class="flex f-a-c row" @tap="toAddFriendPage">
						<image src="/static/images/normal-avatar.png" style="width:42rpx;height:42rpx;"></image>
						<text class="c-white">添加朋友</text>
					</view>
				</view>
			</view>
		</view>
		<scroll-view scroll-y class="list">
			<view class="item flex f-a-c" @click="toChat">
				<view style="position: relative;" class="mr-16">
					<image src="/static/images/avatar.png" alt="" class="list_avatar" />
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
				title: 'Hello',
				animationData:{},
				isShow: false
			}
		},
		onLoad() {

		},
		onHide() {
			this.hideAdd()
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
			},
			showAdd() {
				this.isShow = true
				this.addFriendAnimation('show')
			},
			hideAdd() {
				this.isShow = false
				this.addFriendAnimation('hide')
			},
			toAddFriendPage() {
				uni.navigateTo({
					url:'/pages/add_search/add_search'
				})
			},
			addFriendAnimation(type) {
				let animation = this.initAnimation(0)
				if(type ==='show') {
					animation.scale(1).step()
				}else {
					animation.scale(0).step()
				}
				this.animationData = animation.export()
			},
			initAnimation(delay) {
				return uni.createAnimation({
					duration: 300,
					timingFunction: "ease",
					delay
				})
			}
		}
	}
</script>

<style lang="scss">
.top {
	position: relative;
	padding: 8rpx 32rpx;
	border-bottom: 2rpx solid #dddddd;
	.idx_logo {
		position: absolute;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		width: 80rpx;
		height: 42rpx;
	}
	.top_avatar {
		width: 68rpx;
		height: 68rpx;
		border-radius: 16rpx;
	}
	
	.icon {
		width: 52rpx;
		height: 52rpx;
	}
}

.list {
	height: calc(100% - 86rpx);
	.item {
		padding: 20rpx 32rpx;
		.list_avatar {
			width: 96rpx;
			height: 96rpx;
			border-radius: 24rpx;
		}
		.num {
			position: absolute;
			top: 0;
			right: 0;
			transform: translate3d(50%,-50%,0);
			padding: 0 10rpx;
			background: $uni-color-error;
			font-size: 24rpx;
			color: #fff;
			border-radius: 50%;
		}
	}
}
.tip {
	transform: scale(0);
	z-index: 999;
	background: rgba(0, 0, 0, .7);
	position: absolute;
	top: 66rpx;
	left: -74rpx;
	font-size: 28rpx;
	border-radius: 8rpx;
	.triangle {
		position: absolute;
		right: 16rpx;
		top: -10rpx;
		border-right: 12rpx solid transparent;
		border-bottom: 12rpx solid rgba(0, 0, 0, .6);
		border-left: 12rpx solid transparent;
	}
	.row {
		text {
			margin-left: 16rpx;
			white-space: nowrap;
		}
		padding: 12rpx 24rpx;
	}
}
</style>
