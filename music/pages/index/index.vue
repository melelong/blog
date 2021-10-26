<template>
	<view class="index">
		<!-- 轮播图 -->
		<view class="uni-padding-wrap">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="(item, index) in banneritems" :key="index" @click="gobanner (item)">
					<fr-image :src="item.imageUrl" class="img" :lazy-load="true" loading-ing-img="two-balls">
					</fr-image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 推荐歌单 -->
		<view class="recommendedSongListsTitle">推荐歌单</view>
		<scroll-view scroll-x="true" class="Mask">
			<view class="recommendedSongLists" :style="{'width': `${width}vw`}">
				<view class="recommendedSongList" v-for="(item, index) in SongLists" :key="index"  @click="gosongslist(item.id)">
					<view class="recommendedSongListImg1">
						<fr-image :src="item.picUrl" class="recommendedSongListImg" :lazy-load="true" loading-ing-img="two-balls"></fr-image>
					</view>
					<view class="recommendedSongListInfo">{{item.name}}</view>
				</view>
			</view>
		</scroll-view>
		<!-- 最新音乐 -->
		<view class="recommendedSongsTitle">最新音乐</view>
		<view class="recommendedSongs">
			<view class="Songs" v-for="(item, index) in newsongs" :key="index" @click="goPlay(item.id)">
				<view class="Song_font">
					<view class="name">{{item.song.name}}{{item.song.alias.length === 0 ? '' : `(${item.song.alias})`}}
					</view>
					<view class="info">
						<image src="../../static/img/SQ.png" mode=""></image>
						{{`${item.song.artists[0].name}-${item.song.album.name}`}}
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
				indicatorDots: true,
				autoplay: true, // 是否自动播放
				interval: 2000,
				duration: 1000,
				banneritems: [],// 存储轮播图数据
				SongLists: [], // 存储推荐歌单
				newsongs: [] ,// 存储推荐新歌
				width: 0
			}
		},
		computed: {
		},
		onUnload() {
			console.log('index Unload')
		},
		onPullDownRefresh() {
			console.log('刷新')
			this.banneritems = []
			this.SongLists = []
			this.newsongs = []
			setTimeout(() => {
				this.getbannerdata()
				this.getSongLists()
				this.getnewsongs( () => {
					uni.stopPullDownRefresh()
				})
			},100)
		},
		async onLoad() {
			await this.getbannerdata()
			await this.getSongLists()
			await this.getnewsongs()
		},
		methods: {
			// 获取轮播图
			async getbannerdata() {
				const bannerdata = await this.$request('/banner/get', {
					clientType: 'android'
				})
				const res = bannerdata
				if (res) {
					if (res.code === 200) {
						this.banneritems = res.banners
						// console.log(this.banneritems)
					}
				} else {
					console.log(bannerdata)
				}
			},
			gobanner (item) {
				if (item.targetType === 1) {
					this.goPlay(item.encodeId)
				} else if(item.targetType === 10) {
					this.goAlbum(item.encodeId)
				}
			},
			// 获取推荐歌单
			async getSongLists() {
				const getSongListsdata = await this.$request('/personalized/playlist')
				const res = getSongListsdata
				if (res) {
					if (res.code === 200) {
						this.SongLists = res.result
						this.width = this.SongLists.length * 34
					}
				} else {
					console.log(getSongListsdata)
				}
			},
			// 获取最新音乐
			async getnewsongs() {
				const getnewsongsdata = await this.$request('/personalized/newsong')
				const res = getnewsongsdata
				if (res) {
					if (res.code === 200) {
						this.newsongs = res.result
					}
				} else {
					console.log(getnewsongsdata)
				}
			},
			// 播放跳转
			goPlay(id) {
				uni.navigateTo({
					url:`../player/player?id=${id}`
				})
			},
			// 专辑跳转
			goAlbum(id) {
				uni.navigateTo({
					url:`../Album/Album?id=${id}`
				})
			},
			// 歌单跳转
			gosongslist(id) {
				uni.navigateTo({
					url:`../songslist/songslist?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './../../static/scss/index.scss';
</style>
