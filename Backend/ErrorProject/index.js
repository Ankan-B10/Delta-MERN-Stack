const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

//redirect chat
const Chat = require("./models/chat.js");

//method-override
const methodOverride = require("method-override");

const ExpressError = require("./ExpressError.js");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

//! index route
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // console.log(chats);
    // res.send("working");
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

//! create Route
app.post("/chats", async (req, res) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    // console.log(newChat);
    await newChat.save();
    res.redirect("/chats"); //redirect to home page
  } catch (err) {
    next(err);
  }
});

//! new route
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "page not found");
  res.render("new.ejs");
});
// app(fn);

//* Aync wrap function */
function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

//*Error Handler -> Show Route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    // async error
    if (!chat) {
      next(new ExpressError(404, "chat not found"));
    }
    res.render("edit.ejs", { chat });
  })
);

//! edit Route
app.get("/chats/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat }); //id extract
    // res.send("root is working...");
  } catch (err) {
    next(err);
  }
});

//! Update Route
app.put("/chats/:id", async (req, res) => {
  try {
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
  } catch (err) {
    next(err);
  }
});

//! Destroy/Delete Route
app.delete("/chats/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats"); //after delete redirect to main page
  } catch (err) {
    next(err);
  }
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

const handleValidationErr = (err) => {
  console.log("This was a Validation error. Please follow rules");
  console.dir(err.message);
  return err;
};

//! Error name print
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

//! Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some Error Occured" } = err;
  res.status(status).send(message);
});

app.listen(8090, () => {
  console.log("server is running");
});
