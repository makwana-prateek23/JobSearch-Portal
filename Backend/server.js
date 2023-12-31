const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/");

mongoose.connection.on("error", (error) => {
  console.log(error.messege);
  process.exit(true);
});

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const routes = require("./src/routes/authRoutes");

app.use(routes);

app.listen(port, () => {
  console.log("WORKING");
});
