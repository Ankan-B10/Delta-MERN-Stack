// Ans1
let btn = document.createElement("button");
let input = document.createElement("input");
// console.dir(btn);
btn.innerText = "click me!";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

// Ans 2
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Ans 3
let button = document.querySelector("#btn");
// button.classList.add("btnStyle");

// Ans 4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>Dom Practice</u>";
document.querySelector("body").append(h1);
h1.classList.add("h1c"); // to give color purple

// Ans 5
let p = document.createElement("p");
p.innerHTML = "ApnaCollege <b>Delta</b> Practice";
document.querySelector("body").append(p);
