const Product = require("../models/products.js");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dcwbupnek",
  api_key: "482132343232253",
  api_secret: "5HOzfjxGplACwekT8svm-IwSrCs",
});

const create_product = (req, res, next) => {
  Product.find({
    ProductModel: req.body.ProductModel,
  })
    .exec()
    .then((product) => {
      console.log("This is the product");
      console.log(product);
      if (product.length >= 1) {
        return res.status(409).json({
          message: "product already exist",
        });
      } else {
        const file = req.files.ProductImage;
        console.log(file);
        cloudinary.uploader.upload(file.tempFilePath, (err, imageResult) => {
          console.log(imageResult);
          console.log("checking here");
          if (imageResult) {
            const product = new Product({
              _id: new mongoose.Types.ObjectId(),
              ProductModel: req.body.ProductModel,
              ProductName: req.body.ProductName,
              ProductCategory: req.body.ProductCategory,
              ProductColor: req.body.ProductColor,
              ProductPrice: req.body.ProductPrice,
              ProductImage: imageResult.url,
            });
            product.save().then((result) => {
              //capturing the success result
              console.log("This is the result from saving");
              console.log(result);
              //constructing successful response
              res.status(201).json({
                message: "Product Added",
                product: result,
              });
            });
          }
          if (err) {
            return res.status(401).json({
              message: "Not able to save data in database",
            });
          }
        });
      }
    })
    .catch((err) => {
      //Error in any part of execution will be handled in this and create response
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
// Get all Products list
const get_all_products = (req, res, next) => {
  Product.find()
    .exec()
    .then((products) => {
      console.log(products);
      res.status(200).json({
        message: "Got all products successfully",
        products,
      });
    })
    .catch((err) => console.log(err));
};
const getProductById = (req, res, next) => {
  Product.find({ _id: new mongoose.Types.ObjectId(req.params.id) })
    .exec()
    .then((product) => {
      console.log(product);
      res.status(200).json({
        message: "Got the product successfully",
        product,
      });
    })
    .catch((err) => console.log(err));
};
const delete_product = (req, res, next) => {
  Product.find({ _id: new mongoose.Types.ObjectId(req.params.id) })
    .exec()
    .then((product) => {
      console.log("This is the product");
      console.log(product);
      //if order is not found that means user does not exists
      if (product.length <= 0) {
        return res.status(409).json({
          message: "product does not exist",
        });
      } else {
        //product is found in the database, and we will delete use
        Product.deleteOne({
          _id: new mongoose.Types.ObjectId(req.params.id),
        }).then((result) => {
          //capturing the success result
          console.log("order deleted successfully");
          console.log(result);
          //constructing successful response
          res.status(200).json({
            message: "order deleted",
            product: result,
          });
        });
      }
    })
    .catch((err) => console.log(err));
};
const updateProductById = (req, res, next) => {
  const updateOps = {};
  for (const [key, value] of Object.entries(req.body)) {
    updateOps[key] = value;
  }
  console.log("check shivani");
  console.log(updateOps);
  const { id } = req.params;
  Product.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((successResult) => {
      res.status(200).json({
        message: "Product Updated",
      });
    })
    .catch((err) => {
      res.status(580).json({
        message: "There has been an error",
        error: err,
      });
    });
};
module.exports = {
  create_product,
  get_all_products,
  getProductById,
  delete_product,
  updateProductById,
};
