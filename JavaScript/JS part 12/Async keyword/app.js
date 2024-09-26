async function greet(){
    // abc.abc(); // random error
    //throw "some random error"; //throw help to saw/give error
    //throw "404 page not found";
    return "Hello";
} // async return always Promise

greet()
    .then((result) =>{
        console.log("Promise was resolved");
        console.log("result was : ",result);
    })
    .catch((error) =>{
        console.log("Promise was rejected with error: ",error);
    });

//arrow function
let demo = async()=>{
    return 5;
};
console.log(demo());