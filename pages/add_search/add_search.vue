<template>
	<view class="box">
		<view class="search flex f-a-c">
			<input type="text" class="flex1 fs-14" placeholder="邮箱/昵称" v-model="keyword" @confirm="search"/>
			<image src="/static/images/search.png" alt="" class="search_btn" />
			<image src="/static/images/delete.png" class="clear_btn" v-show="keyword" @tap="handleClearInput"/>
			<text class="fs-14" @click="back">取消</text>
		</view>
		<scroll-view scroll-y="true" class="search_list">
			<view class="" style="padding: 8rpx 32rpx 0;" v-if="type === 1">
				<view>
					<view class="search_row flex f-a-c" v-for="item in list" :key="item._id">
						<img :src="item.avatar ? item.avatar : '/static/images/avatar.png'" alt="" class="avatar">
						<text class="fs-16 flex1">{{item.nickName}}</text>
						<view class="btn bg-ffe" v-if="item.state === 0">发信息</view>
						<view class="btn bg-4a-10 c-4a" v-else @tap="toFriendDetail(item._id)">加好友</view>
					</view>
				</view>
				<view class="c-9 fs-16 t-c" v-if="empty && keyword" style="padding-top:30rpx;">用户不存在</view>
			</view>
			<view class="" style="padding: 17px 16px 0;" v-else>
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
				keyword: '',
				list: [],
				type: 1,
				empty: false
			}
		},
		watch: {
			keyword: function(oldVal, newVal) {
				if(!newVal) {
					this.empty = false
				}
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			handleClearInput() {
				this.keyword = ''
			},
			toFriendDetail(id) {
				uni.navigateTo({
					url: `/pages/make_friends/make_friends?id=${id}`
				})
			},
			async search() {
				if(!this.keyword) return
				const [err, data] = await this.$http({..._search, data: {
					key: this.keyword
				}})
				if(data.list.length === 0) {
					this.empty = true
				}
				this.list = data.list
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
		padding: 0 80rpx 0 80rpx;
		line-height: 60rpx;
	}
	.clear_btn {
		position: absolute;
		width: 30rpx;
		height: 30rpx;
		top: 50%;
		transform: translate3d(0, -50%, 0);
		right: 140rpx;
	}
	.search_btn {
		position: absolute;
		width: 40rpx;
		height: 40rpx;
		left: 60rpx;
		top: 50%;
		transform: translate3d(0, -50%, 0);
	}
}
.search_list {
	height: calc(100% - 90rpx);
	.search_row {
		padding: 20rpx 0;
		border-bottom: 2rpx dashed #dddddd;
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
	.search_row:last-child {
		border-bottom: 0;
	}
}

</style>
