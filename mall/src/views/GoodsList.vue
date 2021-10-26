<template>
  <div>
    <!-- 回到顶部 -->
    <nav-top></nav-top>
    <!-- 头部组件 -->
    <nav-header></nav-header>
    <!--  -->
    <carousel :per-page="1" :mouse-drag="false" :autoplay="true" :minSwipeDistance="1" :scrollPerPage="true"
     :speed="400" :paginationPadding="0" paginationPosition="bottom-overlay" paginationColor="rgba(0,0,0,.4)"
      paginationActiveColor="rgba(100,100,100,.4)" :paginationSize="12" :navigationEnabled="true" :loop="true"
      navigationPrevLabel="<div></div>" navigationNextLabel="<div></div>">
    <slide v-for="item,index in carouseldata" :key="index">
      <a class="carousel" :style="`background: ${item.color};`">
        <img v-lazy="require(`./../../static/img/${item.url}`)"/>
      </a>
    </slide>
  </carousel>
    <!-- 导航栏 -->
    <nav-bread>
      <span slot="bread">商品</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序方式:</span>
          <a href="javascript:void(0)" class="default cur">默认</a>
          <a href="javascript:void(0)" class="price" @click="sortGoodsList"
            >价格
            <svg class="icon icon-arrow-short" v-bind:class="{'sort-up': !this.sort}">
              <use xlink:href="#icon-arrow-short"></use>
            </svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">筛选</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>价格:</dt>
              <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all')">全部</a></dd>
              <dd v-for="item,index in priceFilter" :key="index">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{item.startPrice}} - {{item.endPrice}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4 wrap">
              <ul>
                <li v-for="item,index in this.goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="require(`./../../static/img/${item.productImage}`)"/></a>
                  </div>
                  <div class="main">
                    <div class="name">{{ item.productName }}</div>
                    <div class="price">{{ item.salePrice }}元</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addcart(item.productId)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div id="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" v-show="this.show">
                  <img src="./../../static/loading/loading-bubbles.svg" alt=""/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal :mdshow="mdshowcheck"  @close="closeModal">
      <p slot="message">
             请先登录!
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="closeModal">关闭</a>
      </div>
    </modal>
    <modal :mdshow="mdShowCart"  @close="closeModal">
      <p slot="message">
        <svg class="icon-status-ok">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
        </svg>
        <span>加入购物车成功!</span>
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="closeModal">继续购物</a>
        <router-link class="btn btn--m" href="javascript:;" to="/Cart">查看购物车</router-link>
      </div>
    </modal>
    <div class="md-overlay" v-show="overLay" @click="closePop"></div>
    <nav-footer></nav-footer>
  </div>
</template>
<style>
@import './../assets/css/GoodsList.css';
</style>
<script>
import NavHeader from './../components/NavHeader.vue'
import NavFooter from './../components/NavFooter.vue'
import NavBread from './../components/NavBread.vue'
import Modal from './../components/Modal.vue'
import NavTop from './../components/NavTop.vue'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'GoodsList',
  data () {
    // 数据变量
    return {
      carouseldata: [
        {
          url: '1.webp',
          name: '1.webp',
          color: '#fbf2f3'
        },
        {
          url: '2.webp',
          name: '2.webp',
          color: '#5f8a8c'
        },
        {
          url: '3.webp',
          name: '3.webp',
          color: '#ded5d3'
        }
      ],
      goodsList: [],
      priceFilter: [
        {
          startPrice: 0,
          endPrice: 1000
        },
        {
          startPrice: 1000,
          endPrice: 2000
        },
        {
          startPrice: 2000,
          endPrice: 3000
        },
        {
          startPrice: 3000,
          endPrice: 4000
        }
      ],
      mdShowCart: false,
      show: true,
      sort: true,
      pageSize: 8,
      page: 1,
      busy: true,
      mdshowcheck: false,
      priceChecked: 'all',
      filterBy: false,
      overLay: false,
      params: {}
    }
  },
  // created () {
  //   console.log('创建GoodsList')
  // },
  // destroyed () {
  //   console.log('销毁GoodsList')
  // },
  components: {
    // 組件注冊
    // NavHeader組件
    NavHeader,
    // NavFooter組件
    NavFooter,
    // 回到顶部组件
    NavTop,
    // 模态框组件
    Modal,
    // 导航栏组件
    NavBread,
    // eslint-disable-next-line vue/no-unused-components
    Carousel,
    // eslint-disable-next-line vue/no-unused-components
    Slide
  },
  async mounted () {
    await this.getGoodsList()
    document.title = '商品首页'
  },
  methods: {
    // 轮播图点击
    handleSlideClick () {
      console.log('123')
      this.$router.push({
        path: '/Registration'
      })
    },
    // 关闭模态框
    closeModal () {
      this.mdshowcheck = false
      this.mdShowCart = false
    },
    // 打开遮罩
    showFilterPop () {
      this.filterBy = !this.filterBy
      this.overLay = true
    },
    // 关闭遮罩
    closePop () {
      this.filterBy = false
      this.overLay = false
    },
    // 价格分类
    setPriceFilter (index) {
      if (index === 'all') {
        this.priceChecked = index
        this.page = 1
        this.filterBy = false
        this.overLay = false
        this.getGoodsList()
      } else {
        this.priceChecked = index
        this.page = 1
        this.filterBy = false
        this.overLay = false
        this.getGoodsList()
      }
    },
    // 获取商品列表请求
    async getGoodsList (flag) {
      this.params = {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sort ? 1 : -1,
        priceLevel: this.priceChecked
      }
      this.show = true
      const goodslistdata = await this.Public.reqGoodsList(this.params)
      this.show = false
      const res = goodslistdata.data
      if (res) {
        if (res.status === '0') {
          if (flag) {
            this.goodsList = this.goodsList.concat(res.result.list)
            if (res.result.count === 0) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else {
            this.goodsList = res.result.list
            this.busy = false
          }
        } else {
          this.$message.error(res.msg)
        }
      } else {
        this.goodsList = []
        console.log(goodslistdata)
      }
    },
    // 商品排序请求
    sortGoodsList () {
      this.sort = !this.sort
      this.page = 1
      this.getGoodsList()
    },
    // 分页请求
    loadMore () {
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getGoodsList(true)
      }, 500)
    },
    // 加入购物车请求
    async addcart (productId) {
      const addcartdata = await this.Private.reqAddcart({
        productId: productId,
        type: 'add'
      })
      const res = addcartdata.data
      if (res) {
        if (res.status === '0') {
          this.mdShowCart = true
          this.$store.commit('updateCartCount', 1)
        } else {
          this.mdshowcheck = true
        }
      }
    }
  }
}
</script>
