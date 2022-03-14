const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    console.log("Verification-------------");
    let headerToken = req.headers.authorization.split(" ")[1];
    let decoded = jwt.verify(headerToken, "Shivani");
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "auth failed",
    });
  }
};
