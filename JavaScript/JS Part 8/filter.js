let num = [1, 3, 5, 2, 7, 9, 12, 11, 6, 8, 20];
let ans = num.filter((el) => {
  return el % 2 == 0;
});

console.log(ans);
