let start = 100;
let end = 200;

function getVal(start, end) {
  let diff = end - start;
  console.log(Math.floor(Math.random() * diff) + start);
}
getVal(start, end);
