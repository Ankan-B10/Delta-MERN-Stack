const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
//express require
const express = require("express");
const app = express();
const path = require("path");
//method override
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); //! to form data parse

//for ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//connection build with mySql workbench
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "ankan@2003",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// console.log(getRandomUser());

//query in variables
// let q = "INSERT INTO user(id, username, email, password) value (?, ?, ?, ?)"; //inserting new data
// let q1 = "INSERT INTO user(id, username, email, password) value ?"; //inserting data -> multiple users

// let user2 = ["123b", "123_newuserb", "abc@gmail.comb", "abcb"];
// let user3 = ["123c", "123_newuserc", "abc@gmail.comc", "abcc"];
// let users = [
//   ["1", "1_newuser", "1@gmail.com", "1a"],
//   ["2", "2_newuser", "2@gmail.com", "2a"],
// ];

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); // 100 fake users
// }

// try {
//   connection.query(q1, [data], (err, result) => {
//     //throw err
//     if (err) throw err;
//     console.log(result); //result is array format
//   });
// } catch (err) {
//   console.log(err);
// }

//to end the connection
// connection.end();

//* Home route create for db
app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"]; //result is array format
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

//* Show Route
app.get("/user", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users }); // {users} is for sending data to ejs
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

//* Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  //! user search in DB basis of id
  let q = `select * from user where id = '${id}' `;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      let user = users[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

//* UPdate (DB) Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  //! user search in DB basis of id
  let q = `select * from user where id = '${id}' `;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      // res.render("edit.ejs", { user });
      if (formPass != user.password) {
        res.send("wrong password");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' where id = '${id}' `;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.send(result);
        });
      }
      res.send(user);
    });
  } catch (err) {
    console.log(err);
    res.send("error in DB");
  }
});

app.listen("8080", () => {
  console.log("server is running");
});
