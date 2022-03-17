const express = require("express");
const router = express.Router();
const {
  create_product,
  get_all_products,
  getProductById,
} = require("../controllers/products.js");
router.post("/", create_product);
router.get("/", get_all_products);
router.get("/:id", getProductById);
module.exports = router;
