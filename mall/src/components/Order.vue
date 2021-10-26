<template>
    <div class="content">
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2" style="text-align: center;"><span>查看你的订单</span></h2>
        </div>
        <div class="item-list-wrap">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>商品</li>
                <li>价格</li>
                <li>数量</li>
                <li>小计</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="(item, index) in orderList" :key="index">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img v-lazy="require(`./../../static/img/${item.productImage}`)">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{item.productName}}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{item.salePrice}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <span class="select-ipt">{{'×'+item.productNum}}</span>
                      </div>
                      <div class="status">有现货</div>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{(item.salePrice*item.productNum)+'元'}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
    <div class="order">
      <ul>
        <li class="order-total">
          <span>收货人:</span>
          <span>{{this.addressitem.userName}}</span>
        </li>
        <li class="order-total">
          <span>收货电话:</span>
          <span>{{this.addressitem.tel}}</span>
        </li>
        <li class="order-total">
          <span>收货地址:</span>
          <span>{{this.addressitem.streetName}}</span>
        </li>
        <li class="order-total">
          <span>运输方式:</span>
          <span>{{this.$route.query.method}}</span>
        </li>
        <li class="order-total">
          <span>项目小计:</span>
          <span>{{Subtotal + '元'}}</span>
        </li>
        <li class="order-total">
          <span>运费:</span>
          <span>{{Freight + '元'}}</span>
        </li>
        <li class="order-total">
          <span>折扣:</span>
          <span>{{discount + '元'}}</span>
        </li>
        <li class="order-total total">
          <span>合计:</span>
          <span>{{(this.Subtotal + this.Freight - this.discount) > 0 ? (this.Subtotal + this.Freight - this.discount) : 0 + '元'}}</span>
        </li>
      </ul>
    </div>
    <div class="Button">
      <a href="javascript:;" @click="Previous"><div class="Previous">上一步</div></a>
      <a href="javascript:;" @click="next"><div class="next">付款</div></a>
    </div>
  </div>
</template>
<script>
import Modal from './../components/Modal.vue'
export default {
  name: 'Order',
  data () {
    return {
      Freight: 0,
      discount: 200,
      order: [],
      List: [],
      orderId: '',
      addressitem: []
    }
  },
  // created () {
  //   console.log('创建Order')
  // },
  // destroyed () {
  //   console.log('销毁Order')
  // },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Modal
  },
  computed: {
    orderList () {
      return this.$store.state.orderList
    },
    Subtotal () {
      let i = 0
      this.orderList.forEach((item) => {
        i += (item.salePrice * item.productNum)
      })
      return i
    },
    abc () {
      let i = 0
      this.orderList.forEach((item) => {
        i += (parseInt(item.productNum))
      })
      return i
    }
  },
  async mounted () {
    await this.getcartList()
    await this.getaddress()
  },
  methods: {
    // 关闭消息框
    // closeModal () {
    // },
    // 生成订单请求
    async generateOrder () {
      const Orderdata = await this.Private.reqGenerateOrder({
        goodsList: this.$store.state.orderList,
        addressInfo: this.addressitem,
        orderTotal: (this.Subtotal + this.Freight - this.discount) > 0 ? (this.Subtotal + this.Freight - this.discount) : 0,
        discount: this.discount,
        Freight: this.Freight,
        Subtotal: this.Subtotal,
        method: this.$route.query.method
      })
      const res = Orderdata.data
      if (res) {
        if (res.status === '0') {
          this.orderId = res.result
        }
      } else {
        console.log(Orderdata)
      }
    },
    // 获取选中的商品
    async getcartList () {
      const cartListdata = await this.Private.reqOrderCartList()
      const res = cartListdata.data
      if (res) {
        if (res.status === '0') {
          const productId = this.$route.query.productId.split(',')
          this.order = res.result
          productId.forEach((item1) => {
            this.order.forEach((item2) => {
              if (item2.productId === item1) {
                this.List.push(item2)
                this.$store.commit('updateOrderList', this.List)
              }
            })
          })
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(cartListdata)
      }
    },
    // 获取订单地址
    async getaddress () {
      const addressdata = await this.Private.reqOrderAddress()
      const res = addressdata.data
      if (res) {
        if (res.status === '0') {
          res.result.forEach((item) => {
            if (item.addressId === this.$route.query.addressId) {
              this.addressitem = item
            }
          })
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(addressdata)
      }
    },
    // 上一步
    Previous () {
      console.log(this.$route.fullPath)
      // this.$router.replace({
      //   path: this.$route.fullPath
      // })
    },
    // 生成订单
    async next () {
      this.orderId = ''
      await this.generateOrder()
      this.$router.replace({
        path: `${this.$route.fullPath}&orderId=${this.orderId}`
      })
    }
  }
}
</script>
