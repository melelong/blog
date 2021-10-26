import axios from 'axios'
import address from './address.js'

class Request {
  constructor () {
    // 创建axios实例
    this._axios = axios.create({
      baseURL: address.baseURL, // 请求地址
      timeout: 1000 * 10, // 请求超时时间
      headers: {}
    })

    // this._axios.interceptors.request.use((config) => {
    //   const requestHeaders = {
    //     'Access-Control-Allow-Origin': 'http://www.meleshop.top',
    //     'Access-Control-Allow-Headers': 'X-Requested-With',
    //     'X-Powered-By': '3.2.1',
    //     'Content-Type': 'application/json;charset=utf-8'
    //   }
    //   config.headers = Object.assign(config.headers, requestHeaders)
    //   return config
    // },
    // (error) => {
    //   Promise.reject(error)
    // })
    // 登录拦截
    this._axios.interceptors.response.use((response) => {
      const res = response.data
      if (res.status === '0') {
        return response
      } else {
        if (response.config.url === '/users/checkLogin') {
          if (res.status === '10001' && window.location.pathname === '/') {
            Promise.reject(res.msg)
            return response
          } else if (res.status === '10001' && window.location.pathname !== '/') {
            Promise.reject(res.msg)
            alert(res.msg)
            return response
          } else {
            return response
          }
        } else {
          return response
        }
      }
    },
    (error) => {
      Promise.reject(error)
    })
  }

  // get请求
  get (url, query = {}) {
    return this._axios({
      url: url,
      method: 'get',
      withCredentials: true,
      params: query
    })
  }

  // post请求
  post (url, data = {}) {
    return this._axios({
      url: url,
      method: 'post',
      withCredentials: true,
      data: data
    })
  }
}

export default new Request()
