<template>
	<view class="box">
		<view class="nav">
			<view class="flex row f-j-s f-a-c" style="padding:20rpx 32rpx;" @click="updateAvatar">
				<view class="flex f-a-c">
					<text class="fs-16">头像</text>
					<image :src="detail.avatar ? detail.avatar : '/static/images/avatar.png'" alt="" class="avatar" @click.stop="previewImg(detail.avatar)"/>
				</view>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
			<view class="flex row f-j-s f-a-c" @tap="showPup('signature')">
				<text class="fs-16 mr-16">签名</text>
				<text class="flex1 ellipsis c-9">{{detail.signature}}</text>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
			<view class="flex row f-j-s f-a-c">
				<text class="fs-16 mr-16">注册</text>
				<text class="flex1 ellipsis c-9">{{detail.createTime}}</text>
				<!-- <image src="/static/images/arrow.png" alt="" class="arrow"> -->
			</view>
			<view class="flex row f-j-s f-a-c" @tap="showPup('nickName')">
				<text class="fs-16 mr-16">昵称</text>
				<text class="flex1 ellipsis c-9">{{detail.nickName}}</text>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
			<view class="flex row f-j-s f-a-c">
				<text class="fs-16 mr-16">性别</text>
				<text class="flex1 ellipsis c-9">{{gender[detail.gender]}}</text>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
			<view class="flex row f-j-s f-a-c" @tap="showPup('birthday')">
				<text class="fs-16 mr-16">生日</text>
				<text class="flex1 ellipsis c-9" >{{detail.birthday}}</text>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
			<view class="flex row f-j-s f-a-c" @tap="showPup('phone')">
				<text class="fs-16 mr-16">电话</text>
				<text class="flex1 ellipsis c-9">{{detail.phone}}</text>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
			<view class="flex row f-j-s f-a-c">
				<text class="fs-16 mr-16">邮箱</text>
				<text class="flex1 ellipsis c-9">{{detail.email}}</text>
			</view>
			<view class="flex row f-j-s f-a-c">
				<text class="fs-16 mr-16">密码</text>
				<text class="flex1 ellipsis c-9">.....</text>
				<image src="/static/images/arrow.png" alt="" class="arrow" />
			</view>
		</view>
		<view class="c-ff5 fs-16 t-c mt-40">设置</view>
	</view>
	

	<uni-popup ref="nickName" background-color="#fff" type="bottom">
		<view class="popup-content">
			<view class="flex f-j-s top f-a-c">
				<text class="title fw-b fs-18">设置昵称</text>
				<text @tap="closePup('nickName')">取消</text>
				<view :class="{'btn': true, 'active': nickName && nickName !== detail.nickName}" @tap="pupSubmit('nickName')">完成</view>
			</view>
			<view class="input">
				<image src="/static/images/delete.png" class="clearBtn" v-if="nickName" @tap="clearInput('nickName')"></image>
				<input type="text" :focus="focus" v-model="nickName" maxlength="15">
			</view>
		</view>
	</uni-popup>
	<uni-popup ref="birthday" background-color="#fff" type="bottom">
		<view class="popup-content">
			<view class="flex f-j-s top f-a-c">
				<text class="title fw-b fs-18">设置生日</text>
				<text @tap="closePup('birthday')">取消</text>
				<view :class="{'btn': true, 'active': birthday && birthday !== detail.birthday}" @tap="pupSubmit('birthday')">完成</view>
			</view>
			<view class="input" style="padding-right:24rpx;">
				<uni-datetime-picker
					type="date"
					:value="birthday"
					@change="birthdayChange"
				/>
			</view>
		</view>
	</uni-popup>
	<uni-popup ref="signature" background-color="#fff" type="bottom">
		<view class="popup-content">
			<view class="flex f-j-s top f-a-c">
				<text class="title fw-b fs-18">设置签名</text>
				<text @tap="closePup('signature')">取消</text>
				<view :class="{'btn': true, 'active': signature && signature !== detail.signature}" @tap="pupSubmit('signature')">完成</view>
			</view>
			<view class="input" >
				<textarea type="text" :focus="focus" v-model="signature"></textarea>
			</view>
		</view>
	</uni-popup>
	<uni-popup ref="phone" background-color="#fff" type="bottom">
		<view class="popup-content">
			<view class="flex f-j-s top f-a-c">
				<text class="title fw-b fs-18">设置电话</text>
				<text @tap="closePup('phone')">取消</text>
				<view :class="{'btn': true, 'active': phone && phone !== detail.phone}" @tap="pupSubmit('phone')">完成</view>
			</view>
			<view class="input">
				<image src="/static/images/delete.png" class="clearBtn" v-if="phone" @tap="clearInput('phone')"></image>
				<input type="text" :focus="focus" v-model="phone">
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import {_my, _update} from '../../API/myApi.js'
	import {formatDate, showToast, uploadFile, chooseMedia} from '../../utils/util.js'
	export default {
		data() {
			return {
				detail: {},
				avatar: '',
				gender: ["保密", "男", "女"],
				focus: false,
				nickName: '',
				signature: '',
				birthday: '',
				phone: '',
				phoneReg: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
			}
		},
		computed() {
			
		},
		onLoad() {

		},
		onShow() {
			this.getData()
		},
		methods: {
			// 剪切图片
			async updateAvatar() {
				const img = await chooseMedia(['image'],1)
				const res = await uploadFile([img.tempFilePath])
				this.avatar = res[0]
				this.update('avatar')
			},
			// 预览
			previewImg(url) {
				uni.previewImage({
					urls:[url],
					current: url
				})
			},
			// 修改昵称
			showPup(option) {
				this.$refs[option].open()
				this[option] = this.detail[option]
				this.focus = true
				console.log(this[option])
			},
			closePup(option) {
				this.$refs[option].close()
				this.focus = false
			},
			clearInput(str) {
				this[str] = ''
			},
			pupSubmit(option) {
				if(!this[option] || this[option] === this.detail[option]) return
				if(option === 'phone' && !this.phoneReg.test(this.phone)) {
					return showToast('请输入正确的电话号码')
				}
				this.update(option);
			},
			birthdayChange(e) {
				this.birthday = e
			},
			//-------------------------------api----------------------------------
			async getData() {
				const [err, data] = await this.$http({
					..._my
				})
				data.data.createTime = formatDate(data.data.createTime)
				this.detail = data.data
			},
			async update(option) {
				const [err, data] = await this.$http(({
					..._update,
					data: {[option]: this[option]}
				}))
				if(data.status === 200) {
					showToast(data.message,1,() => {
						this.$refs[option] && this.$refs[option].close()
						this.getData()
					})
				}
			},
		}
	}
</script>

<style lang="scss">
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
	.uni-popup {
		z-index: 999!important;
	}
	.popup-content {
		padding-top:  var(--status-bar-height);
		background: #f5f5f5;
		height: 100vh;
		.top {
			position: relative;
			padding: 24rpx;
			font-size: 26rpx;
			.title {
				position: absolute;
				left: 50%;
				transform: translate3d(-50%,0,0);
			}
			.btn {
				color: #999;
				background: #ddd;
				border-radius: 8rpx;
				padding: 8rpx 24rpx;
			}
			.btn.active {
				background: $uni-color-success;
				color: #fff;
			}
			
		}
		.input {
			position: relative;
			background: #fff;
			padding: 24rpx 80rpx 24rpx 24rpx;
			.clearBtn {
				top: 50%;
				transform: translate3d(0,-50%,0);
				position: absolute;
				right: 20rpx;
				width: 32rpx;
				height: 32rpx;
			}
		}
	}
</style>