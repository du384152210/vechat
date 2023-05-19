<template>
	<view class="box">
		<img src="/static/images/bg.png" alt="" class="bg_img">
		<view class="flex f-a-c f-j-s top">
			<view class="back"></view>
			<img src="/static/images/menu.png" alt="" class="menu">
		</view>
		<view class="t-c mt-30">
			<view class="img_box">
				<img src="/static/images/avatar.png" alt="" style="width: 100%;height:100%;">
				<view class="sex flex f-a-c f-j-c">
					<img src="/static/images/sexFemale.png" alt="" style="width: 90%;height:90%;">
				</view>
			</view>
			<view class="fs-26 mt-24">hhhhhh</view>
			<view class="fs-14">昵称：很好搭档</view>
			<view class="mt-10 des">夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。</view>
		</view>
		<view class="btn fs-16">加为好友</view>
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
.box {

}
.bg_img {
	z-index: -1;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: .2;
}
.top {
	padding: 10px 12px;
	.back {
		width: 14px;
		height: 14px;
		border-top: 2px solid #000;
		border-left: 2px solid #000;
		transform: rotate(-45deg);
	}
	.menu {
		width: 32px;
		height: 32px;
	}
}
.img_box {
	position: relative;
	overflow: hidden;
	display: inline-block;
	width: 200px;
	height: 200px;
	border-radius: 24px;
	border: 3px solid #fff;
}
.sex {
	position: absolute;
	right: 8px;
	bottom: 8px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: $uni-color-error;
}
.des {
	text-align: justify;
	padding: 0 50px;
}
.btn {
	position: fixed;
	bottom: 4px;
	left: 50%;
	transform: translate3d(-50%,0,0);
	width: 342px;
	padding: 9px 0;
	text-align: center;
	background: $uni-color-warning;
	border-radius: 5px;
}
</style>
