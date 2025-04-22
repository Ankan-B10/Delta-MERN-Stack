const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//schema create
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//model create
const User = mongoose.model("User", userSchema);

//insertOne
const user1 = new User({
  name: "Ankan",
  email: "ankan@gmail.com",
  age: 21,
});
user1.save(); //async method

const user2 = new User({
  name: "Eve",
  email: "eve@gmail.com",
  age: 27,
});
user2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
