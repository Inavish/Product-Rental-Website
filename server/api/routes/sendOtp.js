const express = require("express");
const router = express.Router();
const {
  sendOtp,
  verifyOtp,
  sendReceipt,
} = require("../controllers/sendOtp.js");
router.post("/", sendOtp);
router.post("/verifyOtp", verifyOtp);
router.post("/receipt", sendReceipt);
module.exports = router;
