const User = require("../models/user.js");
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user_signup = (req, res, next) => {
  //try finding if user exists
  User.find({
    email: req.body.email,
  })
    .exec()
    .then((user) => {
      console.log("This is the user");
      console.log(user);
      //if user is found that means user already exists, return a conflict
      if (user.length >= 1) {
        return res.status(409).json({
          message: "email already exist",
        });
      } else {
        // create a hash by salting and hashing the incoming password

        bcryptjs.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            //User not found in the database, and we will create a new user
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              password: hash,
              accessLevel: req.body.accessLevel,
            });
            user.save().then((result) => {
              //capturing the success result
              console.log("This is the result from saving");
              console.log(result);
              //constructing successful response
              res.status(201).json({
                message: "User created",
                user: result,
              });
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

const user_login = (req, res, next) => {
  User.find({
    email: req.body.email,
  })
    .exec()
    .then((user) => {
      console.log(user);
      if (user.length < 1) {
        return res.status(401).json({
          message: "Authentication failed",
        });
      }
      console.log(req.body.password);
      console.log(user[0].password);
      bcryptjs.compare(req.body.password, user[0].password, (err, result) => {
        console.log(err);
        console.log(result);
        if (err) {
          return res.status(401).json({
            message: "Invalid password",
          });
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user[0],
              accessLevel: user[0].accessLevel,
            },
            "Shivani",
            {
              expiresIn: "1h",
            }
          );

          console.log(token);
          return res.status(200).json({
            message: "Authentication successful",
            token,
          });
        } else if (!result) {
          return res.status(401).json({
            message: "Invalid password",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

// Get all users list
const get_all_users = (req, res, next) => {
  User.find()
    .exec()
    .then((users) => {
      console.log(users);
      res.status(200).json({
        message: "Got all users successfully",
        users,
      });
    })
    .catch((err) => console.log(err));
};
// Get user by id
const getUserById = (req, res, next) => {
  User.find({ _id: new mongoose.Types.ObjectId(req.params.id) })
    .exec()
    .then((user) => {
      console.log(user);
      res.status(200).json({
        message: "Got the user successfully",
        user,
      });
    })
    .catch((err) => console.log(err));
};
// Update user
const updateProductById = (req, res, next) => {
  const updateOps = {};
  for (const [key, value] of Object.entries(req.body)) {
    updateOps[key] = value;
  }
  console.log("check shivani");
  console.log(updateOps);
  const { id } = req.params;
  User.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((successResult) => {
      res.status(200).json({
        message: "User Updated",
      });
    })
    .catch((err) => {
      res.status(580).json({
        message: "There has been an error",
        error: err,
      });
    });
};

const delete_user = (req, res, next) => {
  User.find({ _id: new mongoose.Types.ObjectId(req.params.id) })
    .exec()
    .then((user) => {
      console.log("This is the user");
      console.log(user);
      //if user is not found that means user does not exists
      if (user.length <= 0) {
        return res.status(409).json({
          message: "user does not exist",
        });
      } else {
        //User is found in the database, and we will delete use
        User.deleteOne({
          _id: new mongoose.Types.ObjectId(req.params.id),
        }).then((result) => {
          //capturing the success result
          console.log("user deleted successfully");
          console.log(result);
          //constructing successful response
          res.status(200).json({
            message: "User deleted",
            user: result,
          });
        });
      }
    })
    .catch((err) => console.log(err));
};
const userLogout = (req, res, next) => {
  if (req.session) {
    // delete session object
    localStorage.clear();
    res.status(200).json({
      status: "Bye!",
    });
  }
};

module.exports = {
  user_signup,
  user_login,
  get_all_users,
  delete_user,
  getUserById,
  updateProductById,
  userLogout,
};
