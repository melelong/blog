import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		searchHistory: [] // 搜索历史
	},
	mutations: {
		updateSearchHistory (state, searchHistory) {
			state.searchHistory = searchHistory
		}
	}
})
