const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userId: String,
  userName: String,
  userPwd: String,
  createDate: String,
  orderList: [
    {
      orderId: String,
      orderTotal: String,
      addressInfo: {
        addressId: String,
        userName: String,
        streetName: String,
        postCode: String,
        tel: String,
        isDefault: Boolean
      },
      goodsList: [{
        productId: String,
        productName: String,
        salePrice: Number,
        productImage: String,
        checked: String,
        productNum: String
      }],
      method: String,
      Subtotal: String,
      Freight: String,
      discount: String,
      orderStatus: Boolean,
      createDate: String
    }
  ],
  cartList: [
    {
      productId: String,
      productName: String,
      salePrice: Number,
      productImage: String,
      checked: String,
      productNum: String
    }
  ],
  addressList: [
    {
      addressId: String,
      userName: String,
      streetName: String,
      postCode: String,
      tel: String,
      isDefault: Boolean
    }
  ]
})

module.exports = mongoose.model('User', userSchema)
