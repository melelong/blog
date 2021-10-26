const express = require('express')
const router = express.Router()
const Goods = require('../models/goods')

// 获取商品列表
router.get('/list', function (req, res, next) {
  const page = parseInt(req.query.page)
  const pageSize = parseInt(req.query.pageSize)
  const sort = parseInt(req.query.sort)// sort=1升序 sort=-1降序
  const skip = (page - 1) * pageSize
  const priceLevel = req.query.priceLevel
  let params = {}
  let priceStart = ''
  let priceEnd = ''
  if (priceLevel !== 'all') {
    switch (priceLevel) {
      case '0':priceStart = 0; priceEnd = 1000; break
      case '1':priceStart = 1000; priceEnd = 2000; break
      case '2':priceStart = 2000; priceEnd = 3000; break
      case '3':priceStart = 3000; priceEnd = 4000; break
    }
    params = {
      salePrice: {
        $gt: priceStart,
        $lte: priceEnd
      }
    }
  } else {
    params = {}
  }
  const goodsModel = Goods.find(params).skip(skip).limit(pageSize)
  goodsModel.sort({ salePrice: sort })
  goodsModel.exec({}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
})

module.exports = router
