const jwt = require("jsonwebtoken");

const config = require("../config/dbconfig");

const { secret } = config[process.env.NODE.ENV || "development"];

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing Token" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(403).json({ error: "Unauthorized: Invalid Token" });
  }
};

module.exports = { authMiddleware };
