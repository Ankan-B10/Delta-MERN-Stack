const express = require("express");
const app = express();
const port = 8005;

const path = require("path"); //for access all files in views
const { v4: uuidv4 } = require("uuid"); //uuid require
const methodOverride = require("method-override");

//to undenstand express -> Api calls
app.use(express.urlencoded({ extended: true }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); //for ejs

//index routes
let posts = [
  {
    id: uuidv4(), //automatically created unique id's
    username: "apnacollege",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "ankanbera",
    content: "I love coding",
  },
  {
    id: uuidv4(),
    username: "rudra",
    content: "Hard work is imp to achieve success",
  },
];

// 1. index route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// 2. new route
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
//new post request accept
app.post("/posts", (req, res) => {
  //sending element we want to add in Array
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content }); //push to array
  // res.send("post request working");
  res.redirect("/posts"); //automatic redirect
});

// 3. view route
app.get("/posts/:id", (req, res) => {
  //id retrievs
  let { id } = req.params;
  //find the correct id
  let post = posts.find((p) => id === p.id);
  // console.log(post);
  // res.send("working...");
  res.render("show.ejs", { post }); //show the post details
});

// 4. Update route
app.patch("/posts/:id", (req, res) => {
  //id retrievs
  let { id } = req.params;
  let newContent = req.body.content;

  //find the id and wait for update
  let post = posts.find((p) => id === p.id);
  //update the new content
  post.content = newContent;
  console.log(post);
  // res.send("patch working");

  //redirect to post page after update ->edit route
  res.redirect("/posts");
});

// 5. Edit route
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  //form render
  res.render("edit.ejs", { post });
});

// 6. Delete Route
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  //filters out the post whose id matches the given id, effectively removing it from the posts array
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`listing to port: ${port}`);
});
