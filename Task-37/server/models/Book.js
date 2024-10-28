const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  author: {
    type: String
  },
  status:{
    type:String
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;