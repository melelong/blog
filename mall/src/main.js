import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import VueLazyLoad from 'vue-lazyload'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'
import infiniteScroll from 'vue-infinite-scroll'
import VueCarousel from 'vue-carousel'
import Private from './apis/Private'
import Public from './apis/Public'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('./../static/img/ok-2.png'),
  attempt: 2,
  loading: require('./../static/loading/loading-bars.svg')
})

Vue.filter('currency')
Vue.use(infiniteScroll)
Vue.use(VueCarousel)
Vue.prototype.Private = Private
Vue.prototype.Public = Public

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
