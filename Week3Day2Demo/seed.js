const mongoose = require("mongoose");
const Book = require("./models/Book");
const data = require("./db.json");

mongoose
  .connect("mongodb://127.0.0.1:27017/booklistdb")
  .then(async () => {
    console.log("MongoDB connected for seeding");

    await Book.deleteMany({});
    await Book.insertMany(data.books);

    console.log("Books imported successfully");
    process.exit();
  })
  .catch((err) => {
    console.error("Seed error:", err);
    process.exit(1);
  });