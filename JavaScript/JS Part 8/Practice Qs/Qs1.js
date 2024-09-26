let nums = [10, 20, 30, 60, 50];

let ans = nums.every((el) => {
  return el % 10 == 0;
});
console.log(ans);

//or

let res = nums.every((element) => element % 10 == 0);
console.log(res);
