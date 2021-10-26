<template>
	<view class="toplists">
		<view class="toplist">
			<uni-segmented-control :current="current" :values="items" styleType="text"
				activeColor="#d43c33" @clickItem="onClickItem"></uni-segmented-control>
		</view>
		<view class="content">
			<view class="left" v-if="current === 0">
				<view class="toplist" v-for="(item, index) in toplistitem1" :key="index" @click="gosongslist(item.id)">
					<view class="toplistimage1">
						<fr-image :src="item.coverImgUrl" class="toplistimage" :lazy-load="true" loading-ing-img="two-balls"></fr-image>
					</view>
					<text class="UpdateTime">{{item.updateFrequency}}</text>
					<view class="toplistText">
						<view>{{`1.${item.tracks[0].first}-${item.tracks[0].second}`}}</view>
						<view>{{`2.${item.tracks[1].first}-${item.tracks[1].second}`}}</view>
						<view>{{`3.${item.tracks[2].first}-${item.tracks[2].second}`}}</view>
					</view>
				</view>
			</view>
			<view class="right" v-if="current === 1">
				<view class="toplist">
					<view class="box" v-for="(item, index) in toplistitem2" :key="index" @click="gosongslist(item.id)">
						<view class="toplistimage1">
							<fr-image :src="item.coverImgUrl" class="toplistimage" :lazy-load="true" loading-ing-img="two-balls"></fr-image>
						</view>
						<text class="UpdateTime">{{item.updateFrequency}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items:['云音乐特色榜', '全球媒体榜'],
				current: 0,
				toplistitem1: [],
				toplistitem2: []
			}
		},
		onPullDownRefresh() {
			console.log('刷新')
			this.current = 0
			this.toplistitem1 = []
			this.toplistitem2 = []
			setTimeout(() => {
				this.gettoplist(() => {
					uni.stopPullDownRefresh()
				})
			},100)
		},
		onUnload() {
			console.log('toplist Unload')
		},
		async onLoad() {
			await this.gettoplist()
		},
		methods: {
			onClickItem(res) {
				console.log(res)
				if (this.current !== res.currentIndex) {
					this.current = res.currentIndex
				}
				console.log(this.current)
			},
			// 获取音乐榜
			async gettoplist() {
				const toplistdata = await this.$request('/toplist/detail')
				const res = toplistdata
				if (res) {
					if (res.code === 200) {
						this.toplistitem1 = res.list.slice(0, 4)
						this.toplistitem2 = res.list.slice(4, -1)
						console.log(this.toplistitem1)
					}
				} else {
					console.log(toplistdata)
				}
			},
			// 歌单跳转
			gosongslist(id) {
				uni.navigateTo({
					url: `../songslist/songslist?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './../../static/scss/toplist.scss';
</style>
