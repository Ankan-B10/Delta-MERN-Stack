// let nums = [10, 20, 5, 30, 2, 100];

// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });
// console.log(min);

// by using function ->
function getMin(nums) {
  let min = nums.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });
  return min;
}

let nums = [10, 20, 5, 30, 2, 100];
console.log(getMin(nums));

console.log(getMin([5, 11, 2, 7, -1, 8]));
