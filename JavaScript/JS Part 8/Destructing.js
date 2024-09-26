let names = ["tony", "bruce", "abc", "thor", "xyz", "etc"];
let [winner, runnerup, ...others] = names;
console.log(winner);
console.log(others);