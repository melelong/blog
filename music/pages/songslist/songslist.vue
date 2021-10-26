<template>
	<view class="songslist">
		<!-- 歌单头部 -->
		<view class="songslist_heard" :style="{'background': `url(${songslistinfo.img})`}">
			<fr-image :src="songslistinfo.img" :lazy-load="true" loading-ing-img="two-balls" class="songslist_heard_img"></fr-image>
			<view class="songslist_heard_text">
				<text>{{songslistinfo.text}}</text>
			</view>
			<!-- 遮罩 -->
			<view class="Mask" ></view>
		</view>
		<!-- 歌单列表 -->
		<view class="Song">
			<view class="Songs" v-for="(item, index) in songslist" :key="index" @click="goPlay(item)">
				<view class="Song_font">
					<view class="name">
						{{index + 1}}.{{item.name}}
					</view>
					<view class="info">
						<image src="../../static/img/SQ.png" mode=""></image>
						{{`${item.ar[0].name}-${item.al.name}`}}
					</view>
				</view>
				<view class="Song_img">
					<image src="../../static/img/Play.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '',
				songslistinfo: {
					img: '',
					text: ''
				},
				songslist: []
			}
		},
		onPullDownRefresh() {
			console.log('刷新')
			this.songslistinfo = {
				img: '',
				text: ''
			}
			this.songslist = []
			setTimeout(() => {
				this.getsongslist(() => {
					uni.stopPullDownRefresh()
				})
			}, 100)
		},
		onUnload() {
			console.log('songslist Unload')
		},
		async onLoad(option) {
			this.id = option.id
			await this.getsongslist()
		},
		methods: {
			// 播放跳转
			goPlay(item) {
				uni.navigateTo({
					url: `../player/player?id=${item.id}`
				})
			},
			// 获取歌单列表
			async getsongslist() {
				const songslistdata = await this.$request('/playlist/detail', {
					id: this.id
				})
				const res = songslistdata
				if (res) {
					if (res.code === 200) {
						this.songslist = res.playlist.tracks
						this.songslistinfo.img = res.playlist.coverImgUrl
						this.songslistinfo.text = res.playlist.name
						console.log(this.songslist)
					}
				} else {
					console.log(songslistdata)
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './../../static/scss/songslist.scss';
</style>
