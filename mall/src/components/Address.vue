<template>
  <div>
    <div class="content">
      <div class="content_address">
        <div class="title">收件地址</div>
        <ul>
          <li class="Address_Address frame"  v-for="(item, index) in this.addressdata" :key="index"
          :class="{'frame_check': check === item.addressId || (item.isDefault && defauit)}" @click="checkaddress(item);">
            <dl>
              <dt>{{item.userName}}</dt>
              <dd>{{item.streetName}}</dd>
              <dd>{{item.postCode}}</dd>
              <dd>{{item.tel}}</dd>
              <dd><a href="javascript:void(0)" :class="{'red': item.isDefault}" @click="Defauitreq(item)">{{item.isDefault ? '默认' : '设置默认'}}</a></dd>
            </dl>
            <div class="edit">
              <a href="javascript:void(0)" class="item-edit-btn" @click="ChangeAddress(item);">
                <svg class="icon icon-del">
                  <use xlink:href="#icon-edit"></use>
                </svg>
              </a>
              <a href="javascript:void(0)" class="item-edit-btn" @click="() => {mdshowdel = true;aitem = item}">
                <svg class="icon icon-del">
                  <use xlink:href="#icon-del"></use>
                </svg>
              </a>
            </div>
          </li>
          <li class="Address_add frame">
            <a href="javascript:void(0)" class="item-add-btn" @click="checkadd">
              <svg class="icon icon-add">
                <use xlink:href="#icon-add"></use>
              </svg>
            </a>
            <span>最多添加8个地址</span>
          </li>
        </ul>
      </div>
      <div class="content_post">
        <div class="title">邮寄方式</div>
        <ul>
          <li class="method frame frame_check">
            <dl>
              <dt>标准运输</dt>
              <dd>免费</dd>
              <dd>发货后，订单应在1-7个工作日内到达目的地</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="Button">
      <a href="javascript:;" @click="Previous"><div class="Previous">上一步</div></a>
      <a href="javascript:;" @click="next"><div class="next">下一步</div></a>
    </div>
    <!-- 更改地址 -->
    <form
      class="md-modal modal-msg md-modal-transition"
      v-bind:class="{ 'md-show': mdshowchange}"
    >
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">更改地址</div>
          <div class="error-wrap">
            <span class="error error-show"
              v-show="addcheck">{{content}}</span
            >
          </div>
          <a
            class="md-close"
            id="close"
            @click="closeModal"
            >Close</a
          >
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <ul class="io">
              <li class="regi_form_input">
                <i class="icon IconPeople"></i>
                <input
                  type="text"
                  tabindex="1"
                  name="Name"
                  v-model="Name"
                  class="regi_login_input regi_login_input_left"
                  placeholder="Name"
                  data-type="Name"
                />
              </li>
              <li class="regi_form_input">
                <img class="icon cicon" src="./../../static/img/地址.png" alt="">
                <input
                  type="text"
                  tabindex="2"
                  name="Address"
                  v-model="Address"
                  class="regi_login_input regi_login_input_left"
                  placeholder="Address"
                  data-type="Address"
                />
              </li>
              <li class="regi_form_input noMargin">
                <img class="icon cicon" src="./../../static/img/邮政服务.png" alt="">
                <input
                  type="text"
                  tabindex="3"
                  name="PostCode"
                  v-model="PostCode"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="PostCode"
                  data-type="PostCode"
                />
              </li>
              <li class="regi_form_input noMargin">
                <img class="icon cicon" src="./../../static/img/电 话.png" alt="">
                <input
                  type="text"
                  tabindex="4"
                  name="Tel"
                  v-model="Tel"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="Tel"
                  data-type="Tel"
                />
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a class="btn-login" @click="ChangeAddressreq()">更  改</a>
          </div>
        </div>
      </div>
    </form>
    <!-- 添加地址 -->
    <form
      class="md-modal modal-msg md-modal-transition"
      v-bind:class="{ 'md-show': mdshowadd }"
    >
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">添加地址</div>
          <div class="error-wrap">
            <span class="error error-show"
              v-show="addcheck">{{content}}</span
            >
          </div>
          <a
            class="md-close"
            id="close"
            @click="closeModal"
            >Close</a
          >
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <ul class="io">
              <li class="regi_form_input">
                <i class="icon IconPeople"></i>
                <input
                  type="text"
                  tabindex="1"
                  name="Name"
                  v-model="Name"
                  class="regi_login_input regi_login_input_left"
                  placeholder="Name"
                  data-type="Name"
                />
              </li>
              <li class="regi_form_input">
                <img class="icon cicon" src="./../../static/img/地址.png" alt="">
                <input
                  type="text"
                  tabindex="2"
                  name="Address"
                  v-model="Address"
                  class="regi_login_input regi_login_input_left"
                  placeholder="Address"
                  data-type="Address"
                />
              </li>
              <li class="regi_form_input noMargin">
                <img class="icon cicon" src="./../../static/img/邮政服务.png" alt="">
                <input
                  type="text"
                  tabindex="3"
                  name="PostCode"
                  v-model="PostCode"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="PostCode"
                  data-type="PostCode"
                />
              </li>
              <li class="regi_form_input noMargin">
                <img class="icon cicon" src="./../../static/img/电 话.png" alt="">
                <input
                  type="text"
                  tabindex="4"
                  name="Tel"
                  v-model="Tel"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="Tel"
                  data-type="Tel"
                />
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a class="btn-login" @click="add">添  加</a>
          </div>
        </div>
      </div>
    </form>
    <modal :mdshow="addaddress" @close="closeModal">
      <p slot="message">
             最多添加8个地址
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="closeModal">关闭</a>
      </div>
    </modal>
    <modal :mdshow="mdshowdel"  @close="closeModal">
      <p slot="message" v-if="this.addressdata.length > 1">你确认要删除此条数据吗?</p>
      <p slot="message" v-if="this.addressdata.length === 1">至少要有一条数据！！！</p>
      <p slot="message" v-if="this.addressdata.length === 0">请添加一个默认地址！！！</p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="thisdel(aitem);mdshowdel = false;" v-if="this.addressdata.length > 1">确定</a>
        <a class="btn btn--m" href="javascript:;" @click="closeModal">关闭</a>
      </div>
    </modal>
    <div
      class="md-overlay"
      v-if="mdshowadd"
      @click="closeModal()"
    ></div>
    <div
      class="md-overlay"
      v-if="mdshowchange"
      @click="closeModal()"
    ></div>
  </div>
</template>
<style>
  .regi_form_input .cicon{
    background-image: none;
  }
</style>
<script>
import Modal from './../components/Modal.vue'
export default {
  name: 'Address',
  data () {
    return {
      aitem: [],
      Name: '',
      Address: '',
      PostCode: '',
      Tel: '',
      content: '',
      addressId: '',
      addcheck: false,
      addressdata: [],
      addaddress: false,
      check: '',
      mdshowchange: false,
      defauit: true,
      mdshowadd: false,
      mdshowdel: false
    }
  },
  // created () {
  //   console.log('创建Address')
  // },
  // destroyed () {
  //   console.log('销毁Address')
  // },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Modal
  },
  computed: {
  },
  async mounted () {
    await this.getaddress()
  },
  methods: {
    // 关闭消息框
    closeModal () {
      this.addaddress = false
      this.mdshowdel = false
      this.mdshowadd = false
      this.mdshowchange = false
      this.content = ''
      this.Name = ''
      this.Address = ''
      this.PostCode = ''
      this.Tel = ''
      this.addcheck = false
    },
    // 修改地址
    async ChangeAddress (item) {
      this.Name = item.userName
      this.Address = item.streetName
      this.PostCode = item.postCode
      this.Tel = item.tel
      this.addressId = item.addressId
      this.mdshowchange = true
    },
    // 修改地址请求
    async ChangeAddressreq () {
      if (this.Name === '' ||
       this.Address === '' ||
       this.PostCode === '' ||
       this.Tel === '') {
        this.content = '输入不能为空'
        this.addcheck = true
        return 0
      }
      if (this.Name.match(/\s/) ||
       this.Address.match(/\s/) ||
       this.PostCode.match(/\s/) ||
       this.Tel.match(/\s/)) {
        this.content = '输入不能有空格'
        this.addcheck = true
        return 0
      }
      if (!this.PostCode.match(/\d{6}?/)) {
        this.content = 'PostCode格式不对'
        this.addcheck = true
        return 0
      }
      if (!this.Tel.match(/^1[3-9]\d{9}$/)) {
        this.content = 'Tel格式不对'
        this.addcheck = true
        return 0
      }
      const ChangeAddressreqdata = await this.Private.reqChangeAddress({
        addressId: this.addressId,
        userName: this.Name,
        streetName: this.Address,
        postCode: this.PostCode,
        tel: this.Tel
      })
      const res = ChangeAddressreqdata.data
      if (res) {
        if (res.status === '0') {
          this.getaddress()
          console.log('修改成功！')
          this.closeModal()
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(ChangeAddressreqdata)
      }
    },
    // 设置默认地址请求
    async Defauitreq (item) {
      const Defauitreqdata = await this.Private.reqDefauit({
        addressId: item.addressId
      })
      const res = Defauitreqdata.data
      if (res) {
        if (res.status === '0') {
          this.getaddress()
        }
      } else {
        console.log(Defauitreqdata)
      }
    },
    // 检查添加地址是否超过规定数量
    checkadd () {
      if (this.addressdata.length >= 8) {
        this.addaddress = true
      } else {
        this.mdshowadd = !this.mdshowadd
      }
    },
    clean () {
      this.content = ''
      this.Name = ''
      this.Address = ''
      this.PostCode = ''
      this.Tel = ''
      this.addcheck = false
    },
    // 添加地址
    add () {
      if (this.Name === '' ||
       this.Address === '' ||
       this.PostCode === '' ||
       this.Tel === '') {
        this.content = '输入不能为空'
        this.addcheck = true
        return 0
      }
      if (this.Name.match(/\s/) ||
       this.Address.match(/\s/) ||
       this.PostCode.match(/\s/) ||
       this.Tel.match(/\s/)) {
        this.content = '输入不能有空格'
        this.addcheck = true
        return 0
      }
      if (!this.PostCode.match(/\d{6}?/)) {
        this.content = 'PostCode格式不对'
        this.addcheck = true
        return 0
      }
      if (!this.Tel.match(/^1[3-9]\d{9}$/)) {
        this.content = 'Tel格式不对'
        this.addcheck = true
        return 0
      }
      this.addreq()
    },
    // 添加地址请求
    async addreq () {
      const addreqdata = await this.Private.reqAddAddress({
        addressId: this.addressId,
        userName: this.Name,
        streetName: this.Address,
        postCode: this.PostCode,
        tel: this.Tel
      })
      const res = addreqdata.data
      if (res) {
        if (res.status === '0') {
          this.getaddress()
          this.closeModal()
        }
      } else {
        console.log(addreqdata)
      }
    },
    // 删除地址
    async thisdel (item) {
      if (this.addressdata.length === 1) {
        this.addaddress = true
        return 0
      }
      const deldata = await this.Private.reqDelAddress({
        addressId: item.addressId
      })
      const res = deldata.data
      if (res) {
        if (res.status === '0') {
          this.getaddress()
        }
      } else {
        console.log(deldata)
      }
    },
    // 选择地址
    checkaddress (item) {
      this.defauit = false
      this.check = item.addressId
    },
    // 获取地址请求
    async getaddress () {
      const addressdata = await this.Private.reqAddressList()
      const res = addressdata.data
      if (res) {
        if (res.status === '0') {
          this.addressdata = res.result
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(addressdata)
      }
    },
    // 跳转
    Previous () {
      this.$router.go(-1)
    },
    next () {
      const productId = this.$route.query.productId
      if (this.check === '') {
        if (this.addressdata.length === 0) {
          this.mdshowdel = true
          return 0
        }
        this.addressdata.forEach((item) => {
          if (item.isDefault) {
            this.check = item.addressId
          }
        })
        if (this.check === '') {
          this.check = this.addressdata[0].addressId
        }
      }
      // this.$router.replace({
      //   path: '/Cart'
      // })
      this.$router.replace({
        path: `/Shop?productId=${productId}&addressId=${this.check}&method=标准运输`
      })
    }
  }
}
</script>
