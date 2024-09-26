let str = "abcdabcdefgggh";
let n = str.length;

function getUnique(str) {
  let ans = "";
  for (let i = 0; i < n; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) //This line checks if the current character str[i] is not already present in the uniqueChars
    {
      ans += currChar;
    }
  }
  return ans;
}

console.log(getUnique(str));
