const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  productInfo: {
    type: Object,
    required: true,
  },
  totalDays: {
    type: String,
    required: true,
  },
  totalPrize: {
    type: String,
    required: true,
  },
  addedOn: { type: Number, required: true, default: new Date().getTime() },
});
module.exports = mongoose.model("Order", orderSchema);
