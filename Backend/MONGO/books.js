const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("connection done");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: 1,
  },
  catagory: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

//! collection create
const Book = mongoose.model("Book", bookSchema);

//! data insert
// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: 1200,
// });

// let book1 = new Book({
//   title: "Do Epic Shit",
//   author: "Ankur warikoo",
//   price: "299",
// });

let book1 = new Book({
  title: "Marvel Comics V2",
  price: 700,
  catagory: "fiction",
  genre: ["comics", "superheroes"],
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
