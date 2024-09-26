let arr = [1, 2, 3, 4, 5, 6, 9, 3, -1];
console.log(...arr);
let mini = Math.min(...arr);
console.log(`The minimum element in array = ${mini}`);

console.log(..."Ankan");

// spread with array literals
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let num = [...odd, ...even];
console.log(num);

// spread with object literals
let data = {
  email: "iamrudra@2003",
  password: "abcd",
};

let dataCopy = { ...data, id: 123, city: "kolkata" };
console.log("Data = ", data);
console.log("value of new dataCopy = ", dataCopy);
