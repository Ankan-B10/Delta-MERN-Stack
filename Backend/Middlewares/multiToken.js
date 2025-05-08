const express = require("express");
const app = express();

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED");
};

app.get("/", checkToken, (req, res) => {
  res.send("root worked");
});

app.get("/api", checkToken, (req, res) => {
  res.send("api worked");
});

app.listen(8020, () => {
  console.log("port is listining to 8020");
});
