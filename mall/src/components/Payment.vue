<template>
  <div class="Payment">
    <div class="Payment-content">
      <p>使用手机，扫描二维码完成付款</p>
      <img src="./../../static/img/二维码图片_4月3日15时13分37秒.png" alt="">
      <p>在手机上完成交易后，我们可能需要几分钟的时间来确认支付是否成功。</p>
      <p>完成购买后，请按确认</p>
    </div>
    <div class="Button">
      <a href="javascript:;" @click="Previous"><div class="Previous">取消</div></a>
      <a href="javascript:;"><div class="next" @click="next">确认</div></a>
    </div>
  </div>
</template>
<script>
import Modal from './../components/Modal.vue'
export default {
  name: 'Payment',
  data () {
    return {
      cartList: '',
      b: true,
      orderId: this.$route.query.orderId
    }
  },
  // created () {
  //   console.log('创建Payment')
  // },
  // async destroyed () {
  //   console.log('销毁Payment')
  // },
  async beforeDestroy () {
    if (this.b) {
      await this.delOrder()
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Modal
  },
  computed: {
  },
  async mounted () {
  },
  methods: {
    // 上一步
    async Previous () {
      this.$router.replace({
        path: '/Cart'
      })
    },
    // 删除订单
    async delOrder () {
      const delOrderdata = await this.Private.reqDelOrder({
        orderId: this.orderId
      })
      const res = delOrderdata.data
      if (res) {
        if (res.status === '0') {
          console.log('订单取消成功')
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(delOrderdata)
      }
    },
    // 在购物车中去掉订单中的商品
    async delOrderCartList () {
      const delOrderCartListdata = await this.Private.reqDelOrderCartList({
        productId: this.$route.query.productId
      })
      const res = delOrderCartListdata.data
      if (res) {
        if (res.status === '0') {
          console.log('购物车删除成功！')
        }
      } else {
        console.log(delOrderCartListdata)
      }
    },
    async next () {
      await this.delOrderCartList()
      this.b = false
      this.$router.replace({
        path: `${this.$route.fullPath}&orderStatus=1`
      })
    }
  }
}
</script>
