require("dotenv").config();

const dbConfig = {
  connectionString:
    process.env.MONGODB_URL || "mongodb://localhost:27017/jobSearchDB",
  portNo: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "prateekmakwana53@jobSearchportal",
};

module.exports = dbConfig;
