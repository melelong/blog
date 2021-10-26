// 判断环境更换请求地址
const isPro = 'produce'
module.exports = { // www.meleshop.top
  baseURL: isPro === 'Develop' ? 'http://192.168.0.102:3000' : 'http://www.meleshop.top:3000'
}
