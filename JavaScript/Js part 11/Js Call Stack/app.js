function hello(){
    console.log("inside hello func")
    console.log("hello");
}
function demo(){
    console.log("call hello func")
    hello();
}

console.log("call demo func");
demo();

console.log("DONE, bye");