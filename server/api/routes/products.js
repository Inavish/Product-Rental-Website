const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/authCheck.js");
const {
  create_product,
  get_all_products,
  getProductById,
  delete_product,
  updateProductById,
} = require("../controllers/products.js");
router.post("/", authCheck, create_product);
router.get("/", authCheck, get_all_products);
router.get("/:id", authCheck, getProductById);
router.delete("/:id", authCheck, delete_product);
router.put("/update/:id", authCheck, updateProductById);
module.exports = router;
