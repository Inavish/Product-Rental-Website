const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/authCheck.js");
const {
  create_order,
  get_all_orders,
  delete_order,
} = require("../controllers/order.js");
router.post("/", create_order);
router.get("/", authCheck, get_all_orders);
router.delete("/:id", authCheck, delete_order);
module.exports = router;
