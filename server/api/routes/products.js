const express = require("express");
const router = express.Router();
const {
  create_product,
  get_all_products,
  getProductById,
  delete_product,
  updateProductById,
} = require("../controllers/products.js");
router.post("/", create_product);
router.get("/", get_all_products);
router.get("/:id", getProductById);
router.delete("/:id", delete_product);
router.put("/update/:id", updateProductById);
module.exports = router;
