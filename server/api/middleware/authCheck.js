const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    console.log("Verification-------------");
    console.log(req.headers.authorization);
    console.log("check");
    let headerToken = req.headers.authorization;
    if (!headerToken) {
      return res.status(401).json({ error: "you must be logged in" });
    }
    let decoded = jwt.verify(headerToken, "Shivani");
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "auth failed",
    });
  }
};
