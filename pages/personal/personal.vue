<template>
	<view class="box">
		<view class="nav">
			<view class="flex row f-j-s f-a-c" style="padding:20rpx 32rpx;" @click="updateAvatar">
				<view class="flex f-a-c">
					<text class="fs-16">头像</text>
					<img :src="detail.avatar ? detail.avatar : '/static/images/avatar.png'" alt="" class="avatar">
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
				<text class="flex1 ellipsis c-9">{{detail.createTime}}</text>
				<!-- <img src="/static/images/arrow.png" alt="" class="arrow"> -->
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">昵称</text>
				<text class="flex1 ellipsis c-9">{{detail.nickName}}</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">性别</text>
				<text class="flex1 ellipsis c-9">{{gender[detail.gender]}}</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">生日</text>
				<text class="flex1 ellipsis c-9">{{detail.birthday}}</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">电话</text>
				<text class="flex1 ellipsis c-9">{{detail.phone}}</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">邮箱</text>
				<text class="flex1 ellipsis c-9">{{detail.email}}</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
			<view class="flex row f-j-s f-a-c" >
				<text class="fs-16 mr-16">密码</text>
				<text class="flex1 ellipsis c-9">.....</text>
				<img src="/static/images/arrow.png" alt="" class="arrow">
			</view>
		</view>
		<view class="c-ff5 fs-16 t-c mt-40">设置</view>
	</view>
	<ksp-cropper mode="free" :width="200" :height="140" :maxWidth="1024" :maxHeight="1024" :url="url" @cancel="oncancel" @ok="onok"></ksp-cropper>
</template>

<script>
	import { _my } from '../../API/myApi.js'
	import { formatDate } from '../../utils/util.js'
	export default {
		data() {
			return {
				url: '',
				detail: {},
				gender: ["保密", "男", "女"]
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			updateAvatar() {
				uni.chooseMedia({
				  count: 1,
				  mediaType: ['image'],
				  sourceType: ['album', 'camera'],
				  maxDuration: 30,
				  camera: 'back',
				  success: (res)=> {
					console.log(res)
				    this.url = res.tempFiles[0].tempFilePath;
				  }
				})
			},
			onok(ev) {
			    this.url = "";
			    this.path = ev.path;
			},
			oncancel() {
			    // url设置为空，隐藏控件
			    this.url = "";
			},
			async getData() {
				const [err, data] = await this.$http({..._my})
				data.data.createTime = formatDate(data.data.createTime)
				this.detail = data.data
			}
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
