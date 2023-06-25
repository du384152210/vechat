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
			<view class="item flex f-a-c" @click="toChat" v-for="item in msgList" :key="item.id">
				<view style="position: relative;" class="mr-16">
					<image :src="item.avatar" alt="" class="list_avatar" />
					<text class="num" v-show="item.tip > 0">{{item.tip}}</text>
				</view>
				<view class="flex1 right_part">
					<view class="flex f-j-s f-a-c">
						<text class="fs-16">{{item.name}}</text>
						<text class="fs-12 c-9">{{item.lastTime}}</text>
					</view>
					<view class="fs-14 c-6 ellipsis text">{{item.msg}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
	
</template>

<script>
	import { _list } from '../../API/msgApi.js'
	import { compareDate } from '../../utils/util.js'
	export default {
		data() {
			return {
				title: 'Hello',
				animationData: {},
				isShow: false,
				msgList: []
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getList()
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
			},
			//-------------------------------api------------------------
			async getList() {
				const uid = uni.getStorageSync('id');
				const [err, data] = await this.$http({..._list, data: {
					uid
				}})
				data.list.forEach(item => {
					item.lastTime = compareDate(item.lastTime)
				})
				this.msgList = data.list
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
			background: #ccc;
			width: 96rpx;
			height: 96rpx;
			border-radius: 24rpx;
		}
		.right_part {
			border-bottom: 2rpx solid rgba(0, 0, 0, .1);
			padding-bottom: 20rpx;
			.text {
				width: 90%;
			}
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
