const jwt = require("jsonwebtoken");

const config = require("../config/db.config");

const { secret } = config[process.env.NODE.ENV || "development"];

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
