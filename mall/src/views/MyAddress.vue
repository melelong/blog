<template>
  <div>
    <nav-top></nav-top>
    <nav-header></nav-header>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>

        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1"
                d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 32 32">
          <title>ok</title>
          <path class="path1"
                d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1"
                d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path class="path1"
                d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
          <path class="path2"
                d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path3"
                d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
          <path class="path4"
                d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" fill="#605f5f"
                d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
          <path class="path2" fill="#605f5f"
                d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
        </symbol>
      </defs>
    </svg>
    <nav-bread>
      <span slot="bread">我的地址</span>
    </nav-bread>
    <div class="content">
      <div class="content_bread">
      <ul>
        <li class="Address_bread check">我的地址</li>
      </ul>
    </div>
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
    <nav-footer></nav-footer>
  </div>
</template>
<style>
  .regi_form_input .cicon{
    background-image: none;
  }
  .content_bread ul{
  width: 84vw;
  height: 80px;
  margin: auto;
}
.Address_bread{
  margin-top: 20px;
  width: 100%;
  text-align: center;
  display: inline-block;
  color: #999;
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: 2px solid #ccc;
}
.Address_bread::after{
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ccc;
  position: relative;
  margin: auto;
  bottom: -7px;
}
.check {
 color: #d1434a;
 border-bottom: 2px solid #d1434a;
}
.check::after{
  background-color: #d1434a;
}
@media screen and (max-width: 1024px) {
  .content_bread ul{
    width: 96vw;
    height: 80px;
    margin: auto;
  }
}
</style>
<script>
import NavHeader from './../components/NavHeader.vue'
import NavFooter from './../components/NavFooter.vue'
import NavBread from './../components/NavBread.vue'
import Modal from './../components/Modal.vue'
import NavTop from './../components/NavTop.vue'
import '../assets/css/Shop.css'

export default {
  name: 'MyAddress',
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
  //   console.log('创建MyAddress')
  // },
  // destroyed () {
  //   console.log('销毁MyAddress')
  // },
  components: {
    NavHeader,
    NavFooter,
    NavBread,
    // eslint-disable-next-line vue/no-unused-components
    NavTop,
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
    }
  }
}
</script>
