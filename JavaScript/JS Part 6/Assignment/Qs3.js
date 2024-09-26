let country = ["India", "Australia", "United States of America", "Japan"];
let n = country.length;

function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < n; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country[ansIdx];
}

console.log(longestName(country));
