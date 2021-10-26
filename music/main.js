import Vue from 'vue'
import App from './App'
import request from './apis/request.js'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
