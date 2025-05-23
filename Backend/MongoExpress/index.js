const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

//redirect chat
const Chat = require("./models/chat.js");

//method-override
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //used for acess all from public files
app.use(express.urlencoded({ extended: true })); // data parse for create route
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("connection sucessfulll");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//! index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.send("working");
  res.render("index.ejs", { chats });
});

//! create Route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  // console.log(newChat);
  newChat
    .save() //to save new data to DB
    .then((res) => {
      //async process
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats"); //redirect to home page
});

//! new route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//! edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat }); //id extract
  // res.send("root is working...");
});

//! Update Route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params; //id extract
  let { msg: newMsg } = req.body;
  newMsg = newMsg.trim();
  // console.log(newMsg);
  let updtedChat = await Chat.findByIdAndUpdate(
    //fully change in db also
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );

  console.log(updtedChat);
  res.redirect("/chats");
});

//! Destroy/Delete Route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats"); //after delete redirect to main page
});
// //insert data
// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "Send me your exam questions",
//   created_at: new Date(), //created random dates
// });

// chat1.save().then((res) => {
//   //UTC timezone
//   console.log(res);
// });

// route create
app.get("/", (req, res) => {
  // res.send("root is working");
  res.render("home.ejs");
});

app.listen(8080, () => {
  console.log("server is running");
});
