const express = require("express");
const router = express.Router();
const {
  create_order,
  get_all_orders,
  delete_order,
} = require("../controllers/order.js");
router.post("/", create_order);
router.get("/", get_all_orders);
router.delete("/:id", delete_order);
module.exports = router;
