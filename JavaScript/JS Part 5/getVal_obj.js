let student = {
  name: "Ankan Bera",
  age: 21,
  marks: 94.5,
  city: "kolkata",
};
console.log(student);

console.log(student["name"]);
console.log(student.age);

console.log(student.marks);

const post = {
  username: "@AnkanBera10",
  content: "This is my #firstPost",
  likes: 150,
  repost: 5,
  tags: ["@apnaCollege", "@MERN", "@ShradhaKhapra"],
};

let prop = "repost";
console.log(post[prop]);
//post.prop --> not works
console.log(post.prop);