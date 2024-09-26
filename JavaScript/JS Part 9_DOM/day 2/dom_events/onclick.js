// single button select
let btn = document.querySelectorAll ("button");
console.dir(btn);


btn.onclick = function(){
    alert("button was clicked"); 
}

// btn.onclick = function(){
//     console.log("button was clicked"); 
// } 

// function create
function sayHello(){
    alert("Hello ji");
}

btn.onclick = sayHello; //sayHello() -> do work after refresh


// multiple select

let btns = document.querySelectorAll("button");
for (btn of btns){
    btn.onclick = sayHello;
}