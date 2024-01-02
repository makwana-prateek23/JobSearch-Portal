require("dotenv").config();

const {
  MONGODB_URL = "mongodb+srv://prateekgotmusix:swagasprateek@cluster0.cfxyltx.mongodb.net/?retryWrites=true&w=majority",
  PORT = 3000,
  JWT_SECRET = "prateekmakwana53@jobSearchportal",
} = process.env;

const dbConfig = {
  connectionString: MONGODB_URL,
  portNo: PORT,
  jwtSecret: JWT_SECRET,
};

module.exports = dbConfig;
