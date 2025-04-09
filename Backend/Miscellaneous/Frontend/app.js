// let arr = [1, 2, 3];
// arr.sayHello = () => {
//   console.log("hello, i am arr");
// };

//factory function
// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(`Hi, my name is ${this.name}`);
//     },
//   };
//   return person;
// }

// let p1 = PersonMaker("adam", 25);//copy
// let p2 = PersonMaker("eve", 25);//copy

//Constructors -> return anything & start with capital
// function Person(name, age) {
//   //same work like factoy func
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// let p1 = new Person("adam", 25); //instance
// let p2 = new Person("eve", 25); //instance

//Inheritance
class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  talk() {
    console.log(`Hi, I am ${this.name}`);
  }
}

let stu1 = new Student("adam", 25, 94);
