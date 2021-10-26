<template>
	<view class="search">
		<!-- 搜索框 -->
		<view class="search_bar">
			<view class="left">
				<image src="../../static/img/find.png" mode=""></image>
			</view>
			<input type="text" v-model="keywords" class="search_bar_input"
				placeholder-class="search_bar_input_placeholder" placeholder="搜索歌曲、歌手、专辑" @keyup.enter="search"
				@confirm="search" @input="suggest" />
			<view class="right" @click="clear">
				<image src="../../static/img/del.png" mode="" v-if="keywords !== ''"></image>
			</view>
		</view>
		<!-- <view class="search_bar1">
		</view> -->
		<!-- 历史记录 -->
		<view class="searchHistorylist" v-if="SHOWsearchHistorylist">
			<view class="searchHistorytop">
				<view class="searchHistoryTitle">历史记录</view>
				<view class="alldel"  @click="clearStorage">
					<image src="../../static/img/alldel.png"></image>
				</view>
			</view>
			<view class="searchHistoryContent">
				<view class="searchHistory" v-for="(item, index) in searchHistory" :key="index"
					@click="keywords = item; search();">
					{{item}}
				</view>
			</view>
		</view>
		<!-- 热门搜索 -->
		<view class="searchHotlist" v-if="keywords === ''">
			<view class="searchHotTitle">热门搜索</view>
			<view class="searchHotContent">
				<view class="searchHot" v-for="(item, index) in Hot" :key="index"
					@click="keywords = item.first; search();">
					{{item.first}}
				</view>
			</view>
		</view>
		<!-- 搜索建议 -->
		<view class="suggest" v-if="SHOWsuggest">
			<view class="suggest_keywords" @click="search">
				{{`搜索"${keywords}"`}}
			</view>
			<view class="suggest_list" v-for="(item, index) in suggestitem" :key="index"
				@click="SuggestListClick(item)">
				<image src="../../static/img/find.png" mode=""></image>
				<view class="name">{{`${item.name}${item.artists[0].name}`}}</view>
			</view>
		</view>
		<!-- 搜索结果 -->
		<scroll-view scroll-y="true" class="search_results" v-if="SHOWsearch_results">
			<view class="Songs" v-for="(item, index) in songitem" :key="index" @click="goPlay(item)">
				<view class="Song_font">
					<view class="name">{{item.title}}</view>
					<view class="info">
						<image src="../../static/img/SQ.png" mode=""></image>
						{{`${item.Author}-${item.name}`}}
					</view>
				</view>
				<view class="Song_img">
					<image src="../../static/img/Play.png" mode=""></image>
				</view>
			</view>
			<!-- <view class="" v-if="">{{`${this.i < 10 ? '加载中' : '没有了'}`}}</view> -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keywords: '', //存储搜索关键词
				songurl: '',
				SHOWsearchHistorylist: false,
				Playstatus: false,
				SHOWsearch_results: false, // 搜索结果显示
				SHOWsuggest: false, // 搜索建议显示
				Hot: [], // 存储热门搜索
				suggestitem: [], // 存储搜索建议
				songitem: [] ,// 存储搜索结果
				i:0
			}
		},
		watch: {
			keywords: {
				handler (newval, oldval) {
					if (newval !== oldval){
						this.i = 0
					}
					if (newval === '') {
						this.clear()
						uni.getStorageInfo({
							success: (res) => {
								if (res.keys.length === 0) {
									this.SHOWsearchHistorylist = false
								} else {
									this.SHOWsearchHistorylist = true
								}
								// console.log(res.keys)
								this.$store.commit('updateSearchHistory', res.keys.reverse())
							} 
						})
						this.SHOWsearch_results = false
						this.SHOWsuggest = false
					}
				},
				immediate: true
			}
		},
		onUnload() {
			console.log('search Unload')
		},
		computed: {
			searchHistory() {
				return this.$store.state.searchHistory
			}
		},
		async onLoad() {
			await this.getHot()
			uni.getStorageInfo({
				success: (res) => {
					if (res.keys.length === 0) {
						this.SHOWsearchHistorylist = false
					} else {
						this.SHOWsearchHistorylist = true
					}
					// console.log(res.keys)
					this.$store.commit('updateSearchHistory', res.keys.reverse())
				}
			})
		},
		async onReachBottom() {
			console.log('底部')
			if (this.i < 10) {
				this.i++
				this.searchreq()
			} else {
				console.log(this.i)
			}
		},
		methods: {
			clear() {
				this.keywords = ''
				this.songitem = []
				this.SHOWsearch_results = false
				this.SHOWsuggest = false
			},
			// 清空历史
			clearStorage() {
				uni.clearStorage()
				uni.getStorageInfo({
					success: (res) => {
						// console.log(res.keys)
						this.SHOWsearchHistorylist = false
						this.$store.commit('updateSearchHistory', res.keys)
					}
				})
			},
			async SearchBarClick() {
				this.SearchBarStatus = !this.SearchBarStatus
				console.log(this.SearchBarStatus)
				// await this.suggest()
			},
			async SuggestListClick(item) {
				this.keywords = `${item.name}${item.artists[0].name}`
				await this.search()
			},
			// 获取热搜
			async getHot() {
				const getHotdata = await this.$request('/search/hot')
				const res = getHotdata
				if (res) {
					if (res.code === 200) {
						this.Hot = res.result.hots
					}
				} else {
					console.log(getHotdata)
				}
			},
			// 获取搜索建议
			async suggest() {
				if (this.keywords === '') {
					this.SHOWsuggest = false
					this.SHOWsearchHistorylist = false
					return 0
				} else {
					this.SHOWsuggest = true
					this.SHOWsearchHistorylist = false
				}
				this.SHOWsearch_results = false
				const suggestdata = await this.$request('/search/suggest/keyword', {
					keywords: this.keywords,
				})
				const res = suggestdata
				if (res) {
					if (res.code === 200) {
						this.suggestitem = res.result.songs
						console.log(this.searchHistory)
					}
				} else {
					console.log(searchsongdata)
				}
			},
			// 歌曲搜索请求
			async searchreq () {
				const searchsongdata = await this.$request('/search/get', {
					keywords: this.keywords,
					limit: 10,
					offset: this.i
				})
				const res = searchsongdata
				if (res) {
					if (res.code === 200) {
						for (let i = 0; i < res.result.songs.length; i++) {
							this.songitem.push({
								id: res.result.songs[i].id,
								title: res.result.songs[i].name,
								Author: res.result.songs[i].artists[0].name,
								name: res.result.songs[i].album.name
							})
						}
					}
				} else {
					console.log(searchsongdata)
				}
			},
			// 歌曲搜索
			async search() {
				if (this.keywords === '') {
					return 0
				}
				uni.getStorageInfo({
					success: (res) => {
						console.log(res.keys)
						if (res.keys.length > 9) {
							uni.removeStorage({
								key:res.keys[0]
							})
						}
						uni.setStorage({
							key: this.keywords,
							data: this.keywords
						})
						uni.getStorageInfo({
							success: (res1) => {
								console.log('add',res1.keys)
								this.$store.commit('updateSearchHistory', res1.keys.reverse())
							}
						})
					}
				})
				this.SHOWsuggest = false
				this.SHOWsearchHistorylist = false
				this.SHOWsearch_results = true
				this.suggestitem = []
				this.searchreq()
			},
			// 播放跳转
			goPlay(item) {
				uni.navigateTo({
					url: `../player/player?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	@import './../../static/scss/search.scss';
</style>
