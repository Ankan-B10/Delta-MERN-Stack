const someValue = require("./math"); //export math file

console.log(someValue);

console.log(someValue.sum(2, 2));

console.log(someValue.PI);


//require whole directries

const fruits = require("./Fruit");
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[0].name);
