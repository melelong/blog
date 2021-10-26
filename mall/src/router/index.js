import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GoodsList',
    // 普通路由↓
    // component: GoodsList
    // 路由懒加载↓
    component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsList.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    // component: Cart
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/MyAddress',
    name: 'MyAddress',
    // component: MyAddress
    component: () => import(/* webpackChunkName: "MyAddress" */ '../views/MyAddress.vue')
  },
  {
    path: '/MyOrder',
    name: 'MyOrder',
    // component: MyOrder
    component: () => import(/* webpackChunkName: "MyOrder" */ '../views/MyOrder.vue')
  },
  // {
  //   path: '/Userpage',
  //   name: 'Userpage',
  //   // component: Userpage
  //   component: () => import(/* webpackChunkName: "Userpage" */ '../views/Userpage.vue')
  // },
  {
    path: '/Shop',
    name: 'Shop',
    // component: Shop
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
