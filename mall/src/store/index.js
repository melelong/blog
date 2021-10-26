import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Vuex组件公用变量
    CartCount: 0,
    user: '',
    cartList: [],
    orderList: []
  },
  mutations: { // 变量方法
    updateUser (state, user) {
      state.user = user
    },
    updateCartCount (state, CartCount) {
      state.CartCount += CartCount
    },
    initCartCount (state, CartCount) {
      state.CartCount = CartCount
    },
    updateCartList (state, cartList) {
      state.cartList = cartList
    },
    updateOrderList (state, orderList) {
      state.orderList = orderList
    }
  },
  actions: {
  },
  modules: {
  }
})
