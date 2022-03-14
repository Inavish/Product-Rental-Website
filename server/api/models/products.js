const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProductModel: { type: String },
  productName: { type: String, required: true },
  ProductCategory: { type: String },
  ProductColor: { type: String },
  ProductPrice: { type: Number, required: true },
  ProductImage: { type: String, required: true },
  addedOn: { type: Number, required: true, default: new Date().getTime() },
});
module.exports = mongoose.model("Product", productSchema);
