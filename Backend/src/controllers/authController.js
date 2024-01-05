require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const {
  registerSchema,
  loginSchema,
} = require("../validators/auth.validations");

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await registerSchema.validateAsync({ name, email, password });

    const userExists = await UserModel.findOne({ email: email });
    if (userExists) {
      return res.status(403).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validateAsync({ email, password });
    const userExists = await UserModel.findOne({ email: email });

    if (userExists) {
      await bcrypt.compare(password, userExists.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            {
              name: userExists,
              email: userExists.email,
              role: userExists.role,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "15m",
            }
          );
          return res.cookie("JWT_TOKEN", token).json({
            message: "Logged in successfully!",
            data: { token: token, user: userExists },
          });
        } else {
          return res.status(403).json({ message: "Invalid password!" });
        }
      });
    } else {
      return res.status(404).json({ message: "User not Found!" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const verifyJwt = async (req, res) => {
  return res.json({ messge: "Success!" });
};

const logout = async (req, res) => {
  res
    .status(200)
    .cookie("JWT_TOKEN", "none", {
      expires: new Date(Date.now() + 5000),
      httpOnly: true,
    })
    .json({ message: "User logged out successfully!" });
};

module.exports = { register, login, verifyJwt, logout };
