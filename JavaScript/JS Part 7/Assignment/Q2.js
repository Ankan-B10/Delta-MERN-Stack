let num = 4;
const isEvenOdd = (num) => {
  if (num % 2 == 0) {
    console.log(`${num} is a even number`);
  } else {
    console.log(`${num} is not even number`);
  }
};
console.log(isEvenOdd(4));
console.log(isEvenOdd(9));

//or
const isEven = (number) => number % 2 === 0;
console.log(isEven(4));
console.log(isEven(7));