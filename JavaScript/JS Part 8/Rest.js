// let arguments = [1, 2, 3, 4, 5];
function print() {
  console.log(arguments);
  console.log(arguments.length);
}
print(1, 2, 3, 4, 5);

// print minimum
function mini(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}
console.log(mini(12, -2, 0, 4, 5));
console.log(mini("hello", 1, 3, 0, 4, 5));
