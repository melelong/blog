<template>
	<view class="Album">
		<!-- 专辑头部 -->
		<view class="Album_heard" :style="{'background': `url(${Albuminfo.img})`}">
			<fr-image :src="Albuminfo.img" :lazy-load="true" loading-ing-img="two-balls" class="Album_heard_img"></fr-image>
			<view class="Album_heard_text">
				<text>{{Albuminfo.text}}</text>
			</view>
		</view>
		<!-- 专辑列表 -->
		<view class="Song">
			<view class="Songs" v-for="(item, index) in Album" :key="index" @click="goPlay(item)">
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
				Albuminfo: {
					img: '',
					text: ''
				},
				Album: []
			}
		},
		onPullDownRefresh() {
			console.log('刷新')
			this.Albuminfo = {
				img: '',
				text: ''
			}
			this.Album = []
			setTimeout(() => {
				this.getAlbum()
				this.getabc(() => {
					uni.stopPullDownRefresh()
				})
			}, 100)
		},
		onUnload() {
			console.log('Album Unload')
		},
		async onLoad(option) {
			this.id = option.id
			await this.getAlbum()
		},
		methods: {
			// 播放跳转
			goPlay(item) {
				uni.navigateTo({
					url: `../player/player?id=${item.id}`
				})
			},
			// 获取专辑列表
			async getAlbum() {
				const Albumdata = await this.$request('/album', {
					id: this.id
				})
				const res = Albumdata
				if (res) {
					if (res.code === 200) {
						this.Album = res.songs
						this.Albuminfo.img = res.album.blurPicUrl
						this.Albuminfo.text = res.album.name
						console.log(this.Albuminfo.text)
					}
				} else {
					console.log(Albumdata)
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './../../static/scss/Album.scss';
</style>
