require("dotenv").config();

const dbConfig = {
  connectionString: process.env.MONGODB_URL,
  portNo: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = dbConfig;
