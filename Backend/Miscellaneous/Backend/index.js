const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  // deconstruct as form of object
  let { user, password } = req.query;
  res.send(`standered GET response. welcome ${user}`);
});

app.post("/register", (req, res) => {
  let { user, password } = req.body;
  res.send(`standered POST response. welcome ${user}`);
});

app.listen(port, () => {
  console.log(`listing to port ${port}`);
});
