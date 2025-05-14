const express = require("express");
const app = express();
//* access the ExpressError Class
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  //* but developer handle custom errors
  throw new ExpressError(401, "ACCESS DENIED"); //* bad practice of error
};

app.get("/api", checkToken, (req, res) => {
  res.send("api worked");
});

app.get("/", checkToken, (req, res) => {
  res.send("root worked");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to Admin is forbidden");
});

//! Error handling middleware
// app.use((err, req, res, next) => {
//   console.log("------ERROR------");
//   // next(err);
//   res.send(err);
// });

//! Custom error handling -> Display error in web page
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err; //if status undefined, set it to default 500
  res.status(status).send(message);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8040, () => {
  console.log("port is listining to 8040");
});
