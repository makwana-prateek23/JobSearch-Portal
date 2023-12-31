const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
