const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const bodyparser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/");

mongoose.connection.on("error", (error) => {
  console.log(error.messege);
  process.exit(true);
});

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const routes = require("./src/routes/routes.js");
app.use(routes);

app.listen(port, () => {
  console.log("WORKING");
});
