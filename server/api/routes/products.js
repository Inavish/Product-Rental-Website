const express = require("express");
const router = express.Router();
const {
  create_product,
  get_all_products,
} = require("../controllers/products.js");
router.post("/", create_product);
router.get("/", get_all_products);
module.exports = router;
