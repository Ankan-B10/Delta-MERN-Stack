// JS is single thread 

// Syncronus ->
let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);


// Asyncronus ->
setTimeout(()=>{
    console.log("Ankan");
},2000);

setTimeout(()=>{
    console.log("Bera");
},2000);

console.log("Bye...");