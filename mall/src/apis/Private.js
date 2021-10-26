// 私有接口
import http from '../services/request.js'
class Private {
  // users model
  // 登出请求
  reqLogout (data) {
    return http.post('/users/logout', data)
  }

  // 获取购物车数量
  reqCartCount (params) {
    return http.get('/users/cart/getCount', params)
  }

  // 加入购物车请求
  reqAddcart (data) {
    return http.post('/users/cart/edit', data)
  }

  // 修改购物车请求
  reqCartEdit (data) {
    return http.post('/users/cart/edit', data)
  }

  // 获取购物车列表
  reqCartList (params) {
    return http.get('/users/cart/getList', params)
  }

  // 修改地址请求
  reqChangeAddress (data) {
    return http.post('/users/address/ChangeAddress', data)
  }

  // 设置默认地址请求
  reqDefauit (data) {
    return http.post('/users/address/setDefuit', data)
  }

  // 添加地址请求
  reqAddAddress (data) {
    return http.post('/users/address/add', data)
  }

  // 删除地址请求
  reqDelAddress (data) {
    return http.post('/users/address/del', data)
  }

  // 获取地址请求
  reqAddressList (params) {
    return http.get('/users/address/getList', params)
  }

  // 获取订单请求
  reqOrderList (params) {
    return http.get('/users/Order/getAll', params)
  }

  // 生成订单请求
  reqGenerateOrder (data) {
    return http.post('/users/Order/generateOrder', data)
  }

  // 获取订单选中的商品请求
  reqOrderCartList (params) {
    return http.get('/users/cart/getList', params)
  }

  // 获取订单地址
  reqOrderAddress (params) {
    return http.get('/users/address/getList', params)
  }

  // 获取商品信息
  reqOrderInfo (data) {
    return http.post('/users/Order/getOrder', data)
  }

  // 删除订单请求
  reqDelOrder (data) {
    return http.post('/users/Order/delOrder', data)
  }

  // 在购物车中去掉订单中的商品请求
  reqDelOrderCartList (data) {
    return http.post('/users/cart/delOrderCartList', data)
  }
}

export default new Private()
