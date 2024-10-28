import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import User from "./models/Users.js";
import Review from "./models/reviews.js";
import jwt from "jsonwebtoken";
import { authentication } from "./handler/jwtManger.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.frontend_url,
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Database connection
async function main() {
  try {
    await mongoose.connect(process.env.mongo_Altas);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
  }
}

main();

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/user", async (req, res) => {
  const { name, email } = req.body;
    const user = new User({ name, email });
    const token = jwt.sign({ userId: user._id }, process.env.secert);
    res.cookie(process.env.cookieName, token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    await user.save();
    res.status(201).json("User created successfully");
});

app.post("/review", authentication, async (req, res) => {
  const { title, content } = req.body;
    const { userId } = req.user;
    const review = new Review({ title, content, author: userId });
    await review.save();
    res.status(201).json("Review created successfully");
});

app.get("/reviews", async (req, res) => {
  const reviews = await Review.find().populate("author","name");
  res.status(200).json(reviews);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});