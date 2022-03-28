const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const cors = require("cors");
app.use(cors());
dotenv.config();

const dbUrl = `mongodb+srv://${process.env.mongodb_username}:${process.env.password}@cluster0.y97ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB Is Connected"))
  .catch((err) => console.log(err));
const userRouter = require("../api/routes/user.js");
const productsRouter = require("../api/routes/products.js");
const verificationRouter = require("../api/routes/sendOtp.js");
const orderRouter = require("../api/routes/order.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
app.use(morgan("dev"));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use("/verification", verificationRouter);
app.use("/order", orderRouter);

// Handle production
if (process.env.NODE_ENV == "production") {
  //static folder
  app.use(express.static(__dirname + "/public"));
  // handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "../public/index.html"));
}
module.exports = app;
