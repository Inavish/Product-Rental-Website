const Order = require("../models/order.js");
const Product = require("../models/products.js");
const mongoose = require("mongoose");

const create_order = (req, res, next) => {
  Product.find({
    _id: req.body.productId,
  })
    .exec()
    .then((product) => {
      console.log("This is the ordered product");
      console.log(product);

      const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        totalDays: req.body.totalDays,
        totalPrize: req.body.totalPrize,
        productInfo: product[0],
      });

      order.save().then((result) => {
        //capturing the success result
        console.log("This is the result from saving");
        console.log(result);
        //constructing successful response
        res.status(201).json({
          message: "order created",
          order: result,
        });
      });
    })
    .catch((err) => {
      //Error in any part of execution will be handled in this and create response
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// Get all Order list
const get_all_orders = (req, res, next) => {
  Order.find()
    .exec()
    .then((order) => {
      console.log(order);
      res.status(200).json({
        message: "Got all orders successfully",
        order,
      });
    })
    .catch((err) => console.log(err));
};

const delete_order = (req, res, next) => {
  Order.find({ _id: new mongoose.Types.ObjectId(req.params.id) })
    .exec()
    .then((order) => {
      console.log("This is the order");
      console.log(order);
      //if order is not found that means user does not exists
      if (order.length <= 0) {
        return res.status(409).json({
          message: "order does not exist",
        });
      } else {
        //orders is found in the database, and we will delete use
        Order.deleteOne({
          _id: new mongoose.Types.ObjectId(req.params.id),
        }).then((result) => {
          //capturing the success result
          console.log("order deleted successfully");
          console.log(result);
          //constructing successful response
          res.status(200).json({
            message: "order deleted",
            order: result,
          });
        });
      }
    })
    .catch((err) => console.log(err));
};
module.exports = {
  create_order,
  get_all_orders,
  delete_order,
};
