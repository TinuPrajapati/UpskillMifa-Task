require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./middleware/jwtManager");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const users = [];

app.use(
  cors({
    origin: process.env.frontend_url, // specify the exact origin
    credentials: true, // allow credentials (like cookies) to be sent
  })
);

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// User registration
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username) return res.status(404).json("Please enter your username");
  if (!password) return res.status(404).json("Please enter your password");
  users.push({ username, password });
  res.status(201).json("User registered successfully");
});

// User login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username) return res.status(404).json("Please enter your username");
  if (!password) return res.status(404).json("Please enter your password");

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(404).json("Please reagain register ");

  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY);
  res.cookie("accesskey", token, {
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });

  res.status(200).json("User login successfully");
});

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
  res.status(200).json({
    msg: `Hello ${req.user.username}, this is a protected route.`,
    alert: "your are authorized user",
  });
});

app.listen(8080, () => {
  console.log(`Server Start`);
});
