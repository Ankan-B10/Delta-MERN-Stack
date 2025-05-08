const express = require("express");
const app = express();

//* middleware before access api
app.use("/api", (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED");
});

app.get("/api", (req, res) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.time);
});

app.listen(8010, () => {
  console.log("port is listining to 8010");
});
