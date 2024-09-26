let str = ["hi ", "i am ", "Ankan Bera"];
let n = str.length; 
function concat(str) {
  let result="";

  for (let i = 0;i<n ; i++) {
    result = result + str[i];
  }
  return result;
}

console.log(concat(str));
