const express = require("express");
const app = express();

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  //* but developer handle custom errors
  throw new Error("ACCESS DENIED"); //* bad practice of error
};

app.get("/", checkToken, (req, res) => {
  res.send("root worked");
});

// app.get("/wrong", (req, res) => {
//   abcd = abcd;
// });

app.get("/api", checkToken, (req, res) => {
  res.send("api worked");
});

app.listen(8030, () => {
  console.log("port is listining to 8030");
});
