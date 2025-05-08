const express = require("express");
const app = express();

//* middleware
// app.use((req, res, next) => {
//   console.log("hi, i am 1st middleware");
//   next();
// });

// app.use((req, res, next) => {
//     console.log("hi, i am 2st middleware");
//     next();
//   });

//* logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.time);
//   next();
// });

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, iam root");
});

app.use("/random", (req, res) => {
  res.send("this is random page");
});

//* 404 middleware
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8005, () => {
  console.log("port is listining");
});
