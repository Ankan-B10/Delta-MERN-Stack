// what will be output
let greet = "hello";
function changeGreet() {
  let greet = "nameste";
  console.log(greet);
  function innerGreet() {
    console.log(greet);
  }
}
console.log(greet);
changeGreet();
    