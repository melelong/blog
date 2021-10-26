const express = require('express')
const router = express.Router()
const Users = require('../models/users')
const crypto = require('crypto')

router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})
// 注册
router.post('/registered', function (req, res, next) {
  const userName = req.body.userName
  const userPwd = req.body.userPwd
  const salt = Math.random().toString(36).substr(2)
  const createDate = `${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}-${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}  ${new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}:${new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()}`
  const newPwd = userPwd + ':' + createDate + ':' + salt
  const md5 = crypto.createHash('md5')
  const md5Pwd = md5.update(newPwd).digest('hex')
  Users.findOne({ userName: userName }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (doc === null) {
        Users.insertMany({
          userId: salt,
          userName: userName,
          userPwd: md5Pwd,
          createDate: createDate,
          orderList: [],
          cartList: [],
          addressList: []
        }, (err, doc) => {
          if (err) {
            res.json({
              status: '1',
              msg: err.message
            })
          } else {
            res.json({
              status: '0',
              msg: '',
              result: 'suc'
            })
          }
        })
      } else {
        res.json({
          status: '0',
          msg: '',
          result: 'exist'
        })
      }
    }
  })
})
// 登录
router.post('/login', function (req, res, next) {
  const md5 = crypto.createHash('md5')
  const userName = req.body.userName
  const userPwd = req.body.userPwd
  Users.findOne({ userName: userName }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      const createDate = doc.createDate
      const userId = doc.userId
      const newPwd = userPwd + ':' + createDate + ':' + userId
      const md5Pwd = md5.update(newPwd).digest('hex')
      if (md5Pwd === doc.userPwd) {
        res.cookie('userId', doc.userId, {
          maxAge: 1000 * 60 * 60,
          httpOnly: false,
          path: '/'
        })
        res.cookie('userName', doc.userName, {
          path: '/',
          httpOnly: false,
          maxAge: 1000 * 60 * 60
        })
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '账户密码错误',
          result: {}
        })
      }
    }
  })
})
// 登出
router.post('/logout', function (req, res, next) {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  })
  res.cookie('userName', '', {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '',
    result: ''
  })
})
// 登录检测
router.get('/checkLogin', function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName
    })
  } else {
    res.json({
      status: '1',
      msg: '未登錄',
      result: ''
    })
  }
})
// 获取购物车数量
router.get('/cart/getCount', function (req, res, next) {
  if (req.cookies && req.cookies.userId) {
    const userId = req.cookies.userId
    Users.findOne({ userId: userId }, function (err, doc) {
      if (err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        if (doc) {
          let all = 0
          for (let index = 0; index < doc.cartList.length; index++) {
            all += parseInt(doc.cartList[index].productNum)
          }
          res.json({
            status: '0',
            msg: '',
            result: all
          })
        }
      }
    })
  }
})
// 获取购物车列表
router.get('/cart/getList', function (req, res, next) {
  const userId = req.cookies.userId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '',
          result: doc.cartList
        })
      }
    }
  })
})
// 在购物车中去掉订单中的商品 嵌套遍历
router.post('/cart/delOrderCartList1', function (req, res, next) {
  const userId = req.cookies.userId
  const productId = req.body.productId.split(',')
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      productId.forEach((item1) => {
        doc.cartList.forEach((item2, index) => {
          if (item2.productId === item1) {
            doc.cartList.splice(index, 1)
          }
        })
      })
      doc.save(function (err, doc) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 在购物车中去掉订单中的商品 优化
router.post('/cart/delOrderCartList', function (req, res, next) {
  const userId = req.cookies.userId
  const productId = req.body.productId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      const ArrayList = []
      for (let i = 0; i < doc.cartList.length; i++) {
        // if (!~productId.indexOf(doc.cartList[i].productId)) {
        //   ArrayList.push(doc.cartList[i])
        // }
        if (!(productId.indexOf(doc.cartList[i].productId) + 1)) {
          ArrayList.push(doc.cartList[i])
        }
      }
      doc.cartList = ArrayList
      doc.save(function (err, doc) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 修改购物车
router.post('/cart/edit', function (req, res, next) {
  const userId = req.cookies.userId
  const productId = req.body.productId
  const type = req.body.type
  const Goods = require('./../models/goods')
  Users.findOne({ userId: userId }, function (err, userDoc) { // 查找用户ID
    if (err) { // 没找到
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (type === 'add') { // 判断类型
        if (userDoc) {
          let goodsItem = ''
          userDoc.cartList.forEach(function (item) { // 遍历该用户的购物车列表
            if (item.productId === productId) {
              goodsItem = item
              item.productNum++
            }
          })
          if (goodsItem) {
            userDoc.save(function (err2, doc2) {
              if (err2) {
                res.json({
                  status: '1',
                  msg: err2.message
                })
              } else {
                res.json({
                  status: '0',
                  msg: '',
                  result: 'suc'
                })
              }
            })
          } else {
            Goods.findOne({ productId: productId }, function (err1, doc) {
              if (err1) {
                res.json({
                  status: '1',
                  msg: err1.message
                })
              } else {
                if (doc) {
                  doc.productNum = parseInt(1)
                  doc.checked = parseInt(0)
                  userDoc.cartList.push(doc)
                  userDoc.save(function (err2, doc2) {
                    if (err2) {
                      res.json({
                        status: '1',
                        msg: err2.message
                      })
                    } else {
                      res.json({
                        status: '0',
                        msg: '',
                        result: 'suc'
                      })
                    }
                  })
                }
              }
            })
          }
        }
      } else if (type === 'minu') {
        if (userDoc) {
          let goodsItem = ''
          userDoc.cartList.forEach(function (item) {
            if (item.productId === productId) {
              goodsItem = item
              item.productNum--
            }
          })
          if (goodsItem) {
            userDoc.save(function (err2, doc2) {
              if (err2) {
                res.json({
                  status: '1',
                  msg: err2.message
                })
              } else {
                res.json({
                  status: '0',
                  msg: '',
                  result: 'suc'
                })
              }
            })
          } else {
            Goods.findOne({ productId: productId }, function (err1, doc) {
              if (err1) {
                res.json({
                  status: '1',
                  msg: err1.message
                })
              } else {
                if (doc) {
                  doc.productNum = parseInt(1)
                  doc.checked = parseInt(0)
                  userDoc.cartList.push(doc)
                  userDoc.save(function (err2, doc2) {
                    if (err2) {
                      res.json({
                        status: '1',
                        msg: err2.message
                      })
                    } else {
                      res.json({
                        status: '0',
                        msg: '',
                        result: 'suc'
                      })
                    }
                  })
                }
              }
            })
          }
        }
      } else if (type === 'thisDel') {
        Users.update({
          userId: userId
        }, {
          $pull: {
            cartList: {
              productId: productId
            }
          }
        }, function (err, doc) {
          if (err) {
            res.json({
              status: '1',
              msg: err.message,
              result: ''
            })
          } else {
            res.json({
              status: '0',
              msg: '',
              result: 'suc'
            })
          }
        })
      }
    }
  })
})
// 获取地址列表
router.get('/address/getList', function (req, res, next) {
  const userId = req.cookies.userId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '',
          result: doc.addressList
        })
      }
    }
  })
})
// 添加地址
router.post('/address/add', function (req, res, next) {
  const userId = req.cookies.userId
  const userName = req.body.userName
  const streetName = req.body.streetName
  const postCode = req.body.postCode
  const tel = req.body.tel
  const type = req.body.type
  Users.findOne({ userId: userId }, function (err, userDoc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      userDoc.addressList.push({
        addressId: Math.random().toString(36).substr(2),
        userName: userName,
        streetName: streetName,
        postCode: postCode,
        tel: tel,
        isDefault: type === '1' ? !false : false
      })
      userDoc.save(function (err2, doc2) {
        if (err2) {
          res.json({
            status: '1',
            msg: err2.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 删除地址
router.post('/address/del', function (req, res, next) {
  const userId = req.cookies.userId
  const addressId = req.body.addressId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      const ArrayList = []
      for (let i = 0; i < doc.addressList.length; i++) {
        if (!(addressId.indexOf(doc.addressList[i].addressId) + 1)) {
          ArrayList.push(doc.addressList[i])
        }
      }
      doc.addressList = ArrayList
      doc.save(function (err, doc) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 修改地址
router.post('/address/ChangeAddress', function (req, res, next) {
  const userId = req.cookies.userId
  const addressId = req.body.addressId
  const userName = req.body.userName
  const streetName = req.body.streetName
  const postCode = req.body.postCode
  const tel = req.body.tel
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      for (let i = 0; i < doc.addressList.length; i++) {
        if (doc.addressList[i].addressId === addressId) {
          doc.addressList[i].userName = userName
          doc.addressList[i].streetName = streetName
          doc.addressList[i].postCode = postCode
          doc.addressList[i].tel = tel
        }
      }
      doc.save(function (err, doc) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 设置默认地址
router.post('/address/setDefuit', function (req, res, next) {
  const userId = req.cookies.userId
  const addressId = req.body.addressId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      doc.addressList.forEach((item) => {
        if (item.addressId === addressId) {
          item.isDefault = !item.isDefault
        }
        if (item.isDefault && item.addressId !== addressId) {
          item.isDefault = !item.isDefault
        }
      })
      doc.save(function (err2, doc2) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 生成订单
router.post('/Order/generateOrder', function (req, res, next) {
  const userId = req.cookies.userId
  const goodsList = req.body.goodsList
  const addressInfo = req.body.addressInfo
  const orderTotal = req.body.orderTotal
  const Subtotal = req.body.Subtotal
  const method = req.body.method
  const Freight = req.body.Freight
  const discount = req.body.discount
  const createDate = `${new Date().getFullYear()}-${(new Date().getMonth() + 1) < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}-${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}  ${new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}:${new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()}`
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '0',
        msg: err.message
      })
    } else {
      doc.orderList.push({ // 添加订单
        orderId: Math.random().toString(36).substr(2),
        orderTotal: orderTotal,
        addressInfo: addressInfo,
        goodsList: goodsList,
        method: method,
        Subtotal: Subtotal,
        Freight: Freight,
        discount: discount,
        orderStatus: false,
        createDate: createDate
      })
      doc.save(function (err, doc) { // 保存
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: doc.orderList[doc.orderList.length - 1].orderId
          })
        }
      })
    }
  })
})
// 删除订单
router.post('/Order/delOrder', function (req, res, next) {
  const userId = req.cookies.userId
  const orderId = req.body.orderId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      const ArrayList = []
      for (let i = 0; i < doc.orderList.length; i++) {
        if (!(orderId.indexOf(doc.orderList[i].orderId) + 1)) {
          ArrayList.push(doc.orderList[i])
        }
      }
      doc.orderList = ArrayList
      doc.save(function (err, doc) {
        if (err) {
          res.json({
            status: '1',
            msg: err.message
          })
        } else {
          res.json({
            status: '0',
            msg: '',
            result: 'suc'
          })
        }
      })
    }
  })
})
// 获取订单
router.post('/Order/getOrder', function (req, res, next) {
  const userId = req.cookies.userId
  const orderId = req.body.orderId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      doc.orderList.forEach((item) => {
        if (item.orderId === orderId) {
          res.json({
            status: '0',
            msg: '',
            result: item
          })
        }
      })
    }
  })
})
// 获取所有订单
router.get('/Order/getAll', function (req, res, next) {
  const userId = req.cookies.userId
  Users.findOne({ userId: userId }, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: doc.orderList
      })
    }
  })
})
module.exports = router
