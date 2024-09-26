//work as AND gate
let arr = [1, 2, 4, 6];

const ans = arr.every((el) => el % 2 == 0);

console.log(ans);

console.log([1, 3, 5].every((el) => el % 2 != 0));
