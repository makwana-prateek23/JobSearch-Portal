const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const dbConfig = require("./src/config/dbconfig");
const authRoutes = require("./src/routes/authRoutes");
const jobRoutes = require("./src/routes/jobs");
const internshipRoutes = require("./src/routes/Internships");
const savedJobRoutes = require("./src/routes/savedJobs");
const companyAuthRoutes = require("./src/routes/companyAuthRoutes")
const corsOptions = { 
  origin: "http://localhost:3001",
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

mongoose.connect(dbConfig.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Authentication routes
app.use("/auth", authRoutes);
app.use("/company",companyAuthRoutes)

// Jobs and internships routes
app.use("/api/jobs", jobRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/savedJobs", savedJobRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
