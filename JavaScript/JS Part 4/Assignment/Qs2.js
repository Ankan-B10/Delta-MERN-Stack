let num = 123456;
let count = 0;
let copy = num;
while (copy > 0) {
  copy = Math.floor(copy / 10);
  count++;
}
console.log(count);
