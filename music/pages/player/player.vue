<template>
	<view class="player" :style="{'background': `url(${songdetail.img})`}">
		<view class="content">
			<!-- 唱片 -->
			<view class="player0" @click="changPlayState">
				<view class="player1" :class="{'Animation': !PlayState}">
					<view class="player2"></view>
					<view class="player3"></view>
					<view class="player4"></view>
					<view class="player5">
						<fr-image :src="songdetail.img" class="player51" mode="aspectFit" :lazy-load="true" loading-ing-img="two-balls"></fr-image>
					</view>
					<image src="../../static/img/Play.png" v-if="PlayState" class="player6"></image>
				</view>
			</view>
			<!-- 歌曲标题 -->
			<view class="songtitle">
				<text class="title">{{songdetail.title}}-</text><text class="singer">{{songdetail.singer}}</text>
			</view>
			<!-- 歌词 -->
			<scroll-view scroll-y="true" class="lyrics" :scroll-into-view="go">
				<view class="words" v-for="(item, index) in songlyric" :key="index" :id="'abc_' + index"
					:class="{'color1':index === nowindex}" @click="moved(item.time)">
					{{item.str}}
				</view>
			</scroll-view>
			<view class="bottom">
				<!-- 分享 -->
				<button class="share" open-type="share">
					分享
				</button>
				<!-- 下载 -->
			<!-- 	<button class="download" @click="godownload">
					下载
				</button> -->
			</view>

		</view>
		<!-- 遮罩 -->
		<view class="Mask" ></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: '', // 存储歌曲ID
				PlayState: false, // 播放状态
				songurl: [], // 存储歌曲播放地址
				songlyric: [], // 存储歌词
				current: 0, // 存储当前时间
				go: '',
				downloadurl: '', // 下载地址
				platform: '', // 设备类型
				nowindex: 0, // 当前索引
				songdetail: { // 存储歌曲信息
					title: '',
					img: '',
					singer: ''
				}
			}
		},
		components: {},
		onUnload() {
			console.log('player Unload')
		},
		async onLoad(option) {
			this.id = option.id // 获取歌曲ID
			await this.getsongdetail(this.id) // 获取歌曲信息
			await this.getsongurl(this.id) // 获取歌曲播放地址
			await this.getsonglyric(this.id) // 获取歌词
			uni.setNavigationBarTitle({ // 改变页面标题
				title: this.songdetail.title
			})
			// 创建后台多媒体
			const BackgroundAudioManager = uni.getBackgroundAudioManager()
			if (this.songurl !== null) {
				BackgroundAudioManager.src = this.songurl
				BackgroundAudioManager.title = this.songdetail.title
				BackgroundAudioManager.singer = this.songdetail.singer
				BackgroundAudioManager.coverImgUrl = this.songdetail.img
				BackgroundAudioManager.webUrl = this.songurl
			} else {
				uni.showModal({
					title: '提示',
					content: '这歌没有版权',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
							uni.navigateBack({
								delta: 1
							});
						} else if (res.cancel) {
							console.log('用户点击取消')
							uni.navigateBack({
								delta: 1
							});
						}
					}
				})
			}
			// 监听歌曲停止
			BackgroundAudioManager.onStop(() => {
				console.log('停止')
			})
			// 监听歌曲播放
			BackgroundAudioManager.onPlay(() => {
				console.log('播放')
				this.PlayState = false
				// console.log('总时间', BackgroundAudioManager.duration)
			})
			// 监听歌曲暂停
			BackgroundAudioManager.onPause(() => {
				console.log('暂停')
				this.PlayState = true
			})
			// 监听歌曲播放进度
			BackgroundAudioManager.onTimeUpdate(() => {
				// console.log('当前时间', BackgroundAudioManager.currentTime)
				this.current = BackgroundAudioManager.currentTime
				for (let i = 0; i < this.songlyric.length; i++) {
					this.nowindex = i
					// 当前时间与歌词时间对比
					if (this.current < this.songlyric[i].time) {
						this.nowindex = i - 1
						this.go = `abc_${this.nowindex}`
						break
					}
				}

			})
			// 监听自然歌曲播放结束
			BackgroundAudioManager.onEnded(() => {
				console.log('播放结束')
				// 重新创建后台多媒体
				const BackgroundAudioManager = uni.getBackgroundAudioManager()
				BackgroundAudioManager.src = this.songurl
				BackgroundAudioManager.title = this.songdetail.title
				BackgroundAudioManager.singer = this.songdetail.singer
				BackgroundAudioManager.coverImgUrl = this.songdetail.img
				BackgroundAudioManager.play()
			})
		},
		methods: {
			// 改变播放状态
			changPlayState() {
				const BackgroundAudioManager = uni.getBackgroundAudioManager()
				if (this.PlayState) {
					BackgroundAudioManager.play()
				} else {
					BackgroundAudioManager.pause()
				}
				this.PlayState = !this.PlayState
			},
			// 点击歌词改变播放进度
			moved(time) {
				const BackgroundAudioManager = uni.getBackgroundAudioManager()
				BackgroundAudioManager.seek(time)
				this.current = time
			},
			// 获取歌曲详情
			async getsongdetail(songid) {
				const songdetaildata = await this.$request('/song/detail', {
					ids: songid
				})
				const res = songdetaildata
				if (res) {
					if (res.code === 200) {
						this.songdetail.img = res.songs[0].al.picUrl
						this.songdetail.title = res.songs[0].name
						this.songdetail.singer = res.songs[0].ar[0].name
					}
				} else {
					console.log(songdetaildata)
				}
			},
			// 获取歌曲播放地址
			async getsongurl(songid) {
				const songurldata = await this.$request('/song/url', {
					id: songid
				})
				const res = songurldata
				if (res) {
					if (res.code === 200) {
						this.songurl = res.data[0].url
						if (this.songurl === null) {
							console.log(res.data[0])
						}
					}
				} else {
					console.log(songurldata)
				}
			},
			// 获取歌词
			async getsonglyric(songid) {
				const songlyricdata = await this.$request('/lyric', {
					id: songid
				})
				const res = songlyricdata
				if (res) {
					if (res.code === 200) {
						// 判断歌曲是否为轻音乐
						if (res.nolyric) {
							this.songlyric = [{
								time: 0,
								str: '纯音乐，没有歌词'
							}]
						} else if (res.uncollected) {
							this.songlyric = [{
								time: 0,
								str: '暂无歌词'
							}]
						} else {
							let words = res.lrc.lyric.split('[')
							words.forEach((item, index) => {
								let words1 = item.split(']')
								let time = words1[0].split(':')
								if (words1[0] !== '' && words1[1] !== '') {
									this.songlyric.push({
										time: parseInt(time[0]) * 60 + parseFloat(time[1]), // 歌词时间
										str: words1[1] // 歌词
									})
								}
							})
						}
					}
				} else {
					console.log(songurldata)
				}
			}
		}
	}
</script>

<style lang="scss">
	@import './../../static/scss/player.scss';
</style>
