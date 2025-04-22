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

//! find the value and update
User.findOneAndUpdate({ name: "Ankan" }, { age: 35 }) // ({filter/condition}, {updation})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
