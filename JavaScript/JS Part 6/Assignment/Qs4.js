let str = "Ankan Bera";
let n = str.length;

function countV(str) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u" ||
      str.charAt(i) == "A" ||
      str.charAt(i) == "E" ||
      str.charAt(i) == "I" ||
      str.charAt(i) == "O" ||
      str.charAt(i) == "U"
    ) {
      cnt++;
    }
  }
  return cnt;
}

console.log(countV(str));
