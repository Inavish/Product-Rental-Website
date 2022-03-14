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
        cloudinary.uploader.upload(file.tempFilePath, (err, imageResult) => {
          console.log(imageResult);
          console.log("checking here");
          if (imageResult) {
            const product = new Product({
              _id: new mongoose.Types.ObjectId(),
              ProductModel: req.body.ProductModel,
              productName: req.body.ProductName,
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
module.exports = {
  create_product,
  get_all_products,
};
