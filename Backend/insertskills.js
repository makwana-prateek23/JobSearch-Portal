const bcrypt = require("bcrypt");

const plainPassword = "securePassword123";

// Hash the password during registration
bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    console.log("Hashed Password:", hashedPassword);  // Save this hashed password in your database
  }
});