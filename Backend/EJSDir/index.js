const express = require("express");
const app = express();
const path = require("path");

let port = 3001;

//ejs using
app.set("view engine", "ejs"); //view means templates

//path.join use to access views from everywhere
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  //render is used to access full ejs file
  res.render("home.ejs");
});

// app.get("/rolldice", (req, res) => {
//   res.render("rolldice.ejs");
// });

// or ->
app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceVal });
});

//instagram ejs
// app.get("/ig/:username", (req, res) => {
//   let { username } = req.params; // username come from request parameter
//   res.render("instagram.ejs", { username });
// });

//instagram ejs -> Loop
// app.get("/ig/:username", (req, res) => {
//   const followers = ["adam", "ankan", "bob", "abc"];
//   let { username } = req.params; // username come from request parameter
//   res.render("instagram.ejs", { username, followers });
// });

//instagram page build
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  //check valid data
  if (data) {
    res.render("instagram.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
