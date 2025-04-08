const express = require("express");

//execute express call
const app = express(); // app is the server side
const port = 3000;

//app print
// console.dir(app);

// app.use((req, res) => {
//   console.log("request received");
//   res.send({
//     name: "apple",
//     color: "red",
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello this is root!");
});

// //wild card path -> *
// app.get("*", (req, res) => {
//   res.send("this is unvalid path");
// });

//params ->
// app.get("/:username/:id", (req, res) => {
//   console.log(req.params);
// });

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`welcome to the page @${username}`);
});

//query string
// app.get("/search", (req, res) => {
//   console.log(req.query);
//   res.send("no result");
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("nothing searched");
  }
  res.send(`search results = ${q}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
