const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cors = require("cors");
app.use(cors());
const dbUrl =
  "mongodb+srv://shivani15:inavish15@cluster0.y97ig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB Is Connected"))
  .catch((err) => console.log(err));
const userRouter = require("../api/routes/user.js");
const productsRouter = require("../api/routes/products.js");
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

module.exports = app;
