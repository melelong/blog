<template>
  <header class="header">
    <svg
      style="position: absolute; width: 0; height: 0; overflow: hidden;"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-arrow-short" viewBox="0 0 25 32">
          <title>arrow-short</title>
          <path
            class="path1"
            d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"
          ></path>
        </symbol>
        <symbol id="icon-status-ok" viewBox="0 0 32 32">
          <title>status-ok</title>
          <path
            class="path1"
            d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"
          ></path>
          <path
            class="path2"
            d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"
          ></path>
        </symbol>
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <title>cart</title>
          <path
            class="path1"
            d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"
          ></path>
          <path
            class="path2"
            d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"
          ></path>
          <path
            class="path3"
            d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"
          ></path>
          <path
            class="path4"
            d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"
          ></path>
        </symbol>
      </defs>
    </svg>
    <div class="navbar">
      <div class="navbar-left-container">
        <a href="javascript:void(0)" @click="goHomepage">
          <img class="navbar-brand-logo" src="./../../static/img/logo1.png" />
        </a>
      </div>
      <div class="navbar-right-container">
        <a href="javascript:void(0)" v-if="user" @click="color">{{ `${user}` }}</a>
        <div class="menu" :class="{'color': this.a}">
          <a href="javascript:void(0)" v-if="a" class="abc title">{{ `${user}` }}</a>
          <a href="javascript:void(0)" v-if="this.a" :class="{'a1': this.a}" @click="goMyOrder">我的订单</a
        >
        <a
          href="javascript:void(0)"
          v-if="this.a"
          :class="{'a1': this.a}"
          @click="goMyAddress"
          >我的地址</a
        ></div>
        <a
          href="javascript:void(0)"
          class="a1"
          v-if="!user"
          @click="
            () => {
              loginModalFlag = !loginModalFlag;
              this.errorTip = this.NullTip = false;
            }
          "
          >登录</a
        >
        <a
          href="javascript:void(0)"
          class="a1"
          v-if="!user"
          @click="
            () => {
              RegistrationFlag = !RegistrationFlag;
              this.errorTip = this.NullTip = false;
            }
          "
          >注册</a
        >
        <a href="javascript:void(0)" class="a1" v-if="user" @click="logout"
          >登出</a
        >
        <div class="navbar-cart-container">
          <span class="navbar-cart-count">{{ CartCount }}</span>
          <a class="navbar-link navbar-cart-link" href="javascript:;" @click="gocart">
            <svg class="navbar-cart-logo">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#icon-cart"
              ></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- 登录 -->
    <form
      class="md-modal modal-msg md-modal-transition"
      :class="{ 'md-show': loginModalFlag }"
    >
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">登录</div>
          <div class="error-wrap">
            <span class="error error-show" v-show="errorTip"
              >用户名或者密码错误</span
            >
            <span class="error error-show" v-show="NullTip"
              >用户名或者密码不能爲空</span
            >
          </div>
          <a
            class="md-close"
            id="close"
            @click="loginModalFlag = !loginModalFlag"
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
                  name="loginname"
                  v-model="userName"
                  class="regi_login_input regi_login_input_left"
                  placeholder="User Name"
                  data-type="loginname"
                />
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input
                  type="password"
                  tabindex="2"
                  name="password"
                  v-model="userPwd"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="Password"
                  @keyup.enter="login"
                />
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a class="btn-login" @click="login">登 录</a>
          </div>
        </div>
      </div>
    </form>
    <!-- 注冊 -->
    <form
      class="md-modal modal-msg md-modal-transition"
      v-bind:class="{ 'md-show': RegistrationFlag }"
    >
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">注册</div>
          <div class="error-wrap">
            <span class="error error-show" v-show="errorTip"
              >用户名或者密码错误</span
            >
            <span class="error error-show" v-show="NullTip"
              >用户名或者密码不能为空</span
            >
            <span class="error error-show" v-show="ExistTip"
              >该用户已存在</span
            >
          </div>
          <a
            class="md-close"
            id="close"
            @click="RegistrationFlag = !RegistrationFlag"
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
                  name="loginname"
                  v-model="userName"
                  class="regi_login_input regi_login_input_left"
                  placeholder="User Name"
                  data-type="loginname"
                />
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input
                  type="password"
                  tabindex="2"
                  name="password"
                  v-model="userPwd"
                  class="regi_login_input regi_login_input_left login-input-no input_text"
                  placeholder="Password"
                  @keyup.enter="registered"
                />
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a class="btn-login" @click="registered">注  册</a>
          </div>
        </div>
      </div>
    </form>
    <modal :mdshow="mdshowcheck"  @close="closeModal">
      <p slot="message">
             请先登录!
      </p>
      <div slot="btnGroup">
        <a class="btn btn--m" href="javascript:;" @click="closeModal">关闭</a>
      </div>
    </modal>
    <!-- 登录遮罩 -->
    <div
      class="md-overlay"
      v-if="loginModalFlag"
      @click="loginModalFlag = !loginModalFlag"
    ></div>
    <!-- 注册遮罩 -->
    <div
      class="md-overlay"
      v-if="RegistrationFlag"
      @click="RegistrationFlag = !RegistrationFlag"
    ></div>
    <!-- 注册遮罩 -->
    <div
      class="md-overlay abc"
      v-if="a"
      @click="a = !a"
    ></div>
  </header>
</template>
<style>
.a1 {
  display: flex;
  margin: 1%;
  padding: 2px;
  align-items: center;
  border: 1px solid #d1434a;
  border-radius: 8px;
}
.a1:hover {
  color: #d1434a;
}
.title{
  background: #f0f0f0;
  height: 55px;
  line-height: 55px;
  font-weight: bold;
}
.abc{
  display: none;
}
@media screen and (max-width: 767px) {
  .navbar-right-container .menu{
    z-index: 201;
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    background: #fff;
    height: 100vh;
  }
  .navbar-right-container .color{
    width: 230px;
  }
  .abc{
    display: block;
  }
  .a1{
    display: block;
  }
}
</style>
<script>
import Modal from './Modal.vue'
import './../assets/css/login.css'
export default {
  name: 'NavHeader',
  props: {
    mdshow: Boolean
  },
  data () {
    return {
      userName: 'admin',
      a: false,
      userPwd: '123456',
      errorTip: false,
      loginModalFlag: false,
      RegistrationFlag: false,
      NullTip: false,
      ExistTip: false,
      mdshowcheck: false
    }
  },
  watch: {
    $route: {
      immediate: true,
      async handler (val, oldval) {
        if (val !== oldval) {
          await this.checkLogin()
          await this.getcartCount()
        }
      }
    }
  },
  components: {
    // 组件注册
    Modal
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    CartCount () {
      return this.$store.state.CartCount
    }
  },
  async mounted () {
  },
  methods: {
    color () {
      this.a = !this.a
    },
    closeModal () {
      this.mdshowcheck = false
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/'
        })
      }
    },
    gocart () {
      if (this.$store.state.user === '') {
        this.mdshowcheck = true
      } else {
        if (this.$route.path !== '/Cart') {
          this.$router.push({
            path: '/Cart'
          })
        }
      }
    },
    goHomepage () {
      if (this.$route.path !== '/') {
        this.$router.push({
          path: '/'
        })
      }
    },
    goMyAddress () {
      if (this.$route.path !== '/MyAddress') {
        this.$router.push({
          path: '/MyAddress'
        })
      }
    },
    goMyOrder () {
      if (this.$route.path !== '/MyOrder') {
        this.$router.push({
          path: '/MyOrder'
        })
      }
    },
    // 注册
    async registered () {
      if (this.userName === '' || this.userPwd === '') {
        this.NullTip = true
        this.errorTip = false
        this.ExistTip = false
        return 0
      }
      const registereddata = await this.Public.reqRegistered({
        userName: this.userName,
        userPwd: this.userPwd
      })
      const res = registereddata.data
      if (res) {
        if (res.status === '0') {
          if (res.result === 'exist') {
            console.log('注册失败！')
            this.ExistTip = true
          } else {
            console.log('注册成功！')
            this.ExistTip = false
            this.ExistTip = false
            this.RegistrationFlag = false
          }
        } else {
          console.log(res.msg)
        }
      } else {
        console.log(registereddata)
      }
    },
    // 登录检测请求
    async checkLogin () {
      const checkLogindata = await this.Public.reqCheckLogin({})
      const res = checkLogindata.data
      if (res) {
        if (res.status === '0') {
          this.$store.commit('updateUser', res.result)
        } else {
          if (this.$route.path !== '/') {
            this.$router.push({
              path: '/'
            })
          }
        }
      } else {
        console.log(checkLogindata)
      }
    },
    // 登出请求
    async logout () {
      this.a = false
      const logoutdata = await this.Private.reqLogout()
      const res = logoutdata.data
      if (res) {
        if (res.status === '0') {
          this.errorTip = false
          this.loginModalFlag = !this.loginModalFlag
          this.loginModalFlag = !this.loginModalFlag
          this.NullTip = false
          this.ExistTip = false
          this.$store.commit('updateUser', '')
          this.$store.commit('updateCartList', [])
          this.$store.commit('initCartCount', 0)
          if (this.$router.history.current.path !== '/') {
            this.$router.push({
              path: '/'
            })
          }
        }
      } else {
        console.log(logoutdata)
      }
    },
    // 登录请求
    async login () {
      if (this.userName === '' || this.userPwd === '') {
        this.NullTip = true
        this.errorTip = false
        return
      }
      const logindata = await this.Public.reqLogin({
        userName: this.userName,
        userPwd: this.userPwd
      })
      const res = logindata.data
      if (res) {
        if (res.status === '0') {
          this.errorTip = false
          this.loginModalFlag = !this.loginModalFlag
          this.NullTip = false
          this.$store.commit('updateUser', res.result.userName)
          this.getcartCount()
        } else {
          this.errorTip = true
          this.NullTip = false
        }
      } else {
        console.log(logindata)
      }
    },
    // 获取购物车数量
    async getcartCount () {
      const cartCountdata = await this.Private.reqCartCount()
      const res = cartCountdata.data
      if (res) {
        if (res.status === '0') {
          this.$store.commit('initCartCount', res.result)
        }
      } else {
        console.log(cartCountdata)
      }
    }
  }
}
</script>
