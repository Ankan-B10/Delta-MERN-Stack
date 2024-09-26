console.log("Printing hello world for 5 times - >");
let id = setInterval(() => {
  console.log("Hello World");
}, 2000);
setTimeout(() => {
  clearInterval(id);
    console.log("Clear interval run, EXIT!!!");
}, 12000);
