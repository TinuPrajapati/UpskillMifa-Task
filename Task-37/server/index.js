require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Book = require("./models/Book.js");
const app = express();

app.use(
  cors({
    origin: process.env.frontend_url,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database
async function main() {
  await mongoose.connect(process.env.mongo_Atlas);
}

main()
  .then(() => console.log("DataBase Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/save", (req, res) => {
  const { title, description, price, author, status } = req.body;
  const newProduct = new Book({
    title,
    description,
    price,
    author,
    status,
  });
  newProduct.save();
  res.status(201).json({ msg: "Book Add Succesfully", newProduct });
});

app.get("/group", async (req, res) => {
  const data = await Book.aggregate([{$group:{_id:"$author",authorBook:{$sum:1}}}]);
  // const avag = await Book.aggregate([{$group:{_id:"$author",authorBook:{$sum:1},avgPrice:{$avg:"price"}}}]);
  const details = await Book.aggregate([{$group:{_id:"$title",price:{$push:"$price"}}},{$sort:{price:1}}]);
  res.status(200).json({
    data,
    details
  });
});

app.get("/sort", async (req, res) => {
  
  res.status(200).json(details);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});