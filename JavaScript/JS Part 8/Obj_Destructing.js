const student = {
  name: "Karan",
  class: 9,
  age: 14,
  subject: ["hindi", "bengali", "math"],
  username: "karan123",
  password: 1234,
};

const { username: user, password: secret } = student;

console.log(user);
// console.log(username);
console.log(secret);
console.log(student);
