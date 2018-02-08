var mongoose = require('mongoose');

var ProductDetails = new mongoose.Schema({
  /*isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: { type: Date, default: Date.now },*/
  productName: String,
  consumerName: String,
  productCost: String,
  shippingCost: String,
  shippingAddress: String,
  phoneNumber: String,
  productStatus: String,
  date: String,
  updated_date: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Product', ProductDetails);
