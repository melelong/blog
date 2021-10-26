<template>
  <div class="OrderConfirmation">
    <div class="OrderConfirmation-content">
      <img src="./../../static/img/ok-2.png" alt="">
      <p>你的订单正在处理中！</p>
      <p class="info">{{`订单号：${OrderId}`}}</p>
      <p class="info">{{`订单总额：${OrderTotal}元`}}</p>
    </div>
    <div class="Button">
      <a href="javascript:;"><div id="goCart" @click="goCart">查看购物车</div></a>
      <a href="javascript:;"><div id="goGoods" @click="goGoods">查看商品</div></a>
    </div>
  </div>
</template>
<style>
  .Button{
    background-color: rgba(0, 0, 0, 0);
    margin: 10PX auto;
  }
  @media screen and (max-width: 767px) {
    .Button{
      position:static;
    }
  }
</style>
<script>
import Modal from './../components/Modal.vue'
export default {
  name: 'OrderConfirmation',
  data () {
    return {
      OrderId: this.$route.query.orderId,
      OrderTotal: 0
    }
  },
  // created () {
  //   console.log('创建OrderConfirmation')
  // },
  // destroyed () {
  //   console.log('销毁OrderConfirmation')
  // },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Modal
  },
  computed: {
  },
  async mounted () {
    await this.getOrderInfo()
  },
  methods: {
    // 获取商品信息
    async getOrderInfo () {
      const getOrderInfodata = await this.Private.reqOrderInfo({
        orderId: this.$route.query.orderId
      })
      const res = getOrderInfodata.data
      if (res) {
        if (res.status === '0') {
          this.OrderTotal = res.result.orderTotal
          console.log('获取成功')
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(getOrderInfodata)
      }
    },
    // 回到购物车
    goCart () {
      this.$router.push({
        path: '/Cart'
      })
    },
    // 回到主页
    goGoods () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>
