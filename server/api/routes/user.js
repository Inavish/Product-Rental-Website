const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/authCheck.js");
const {
  user_signup,
  user_login,
  get_all_users,
  delete_user,
  getUserById,
  updateProductById,
  userLogout,
} = require("../controllers/user.js");
// const user = require("../controllers/user.js");
// create user
router.post("/", user_signup);
// login user
router.post("/login", user_login);
// get all users
router.get("/", get_all_users);
// Get single user
router.get("/userInfo/:id", authCheck, getUserById);
// delete single user
router.delete("/:id", authCheck, delete_user);
//update single user
router.put("/update/:id", authCheck, updateProductById);
//
router.get("/logout", userLogout);
module.exports = router;
