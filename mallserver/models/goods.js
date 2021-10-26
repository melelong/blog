const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goodSchema = new Schema({
  productId: String,
  productName: String,
  salePrice: Number,
  productImage: String,
  checked: String,
  productNum: String
})

module.exports = mongoose.model('Good', goodSchema)
