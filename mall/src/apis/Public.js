// 公有接口
import http from '../services/request'
class Public {
  // goods model
  // 加入购物车请求
  reqGoodsList (params) {
    return http.get('/goods/list', params)
  }

  // users model
  // 登录检测请求
  reqCheckLogin (params) {
    return http.get('/users/checkLogin', params)
  }

  // 登录请求
  reqLogin (data) {
    return http.post('/users/login', data)
  }

  // 注册
  reqRegistered (data) {
    return http.post('/users/registered', data)
  }
}

export default new Public()
