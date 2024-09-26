let num = 123456;
let sum = 0;

let copy = num;

while (copy > 0) {
  let digit = copy % 10;
  copy = Math.floor(copy / 10);
  sum += digit;
}

console.log(sum);
