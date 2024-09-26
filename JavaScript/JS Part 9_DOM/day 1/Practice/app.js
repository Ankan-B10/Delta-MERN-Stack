// add para
//Q1
let para1 = document.createElement('p');
para1.innerText = "hey, I am red"; // add text to para
document.querySelector('body').append(para1);

para1.classList.add("red");

//Q2
let h3 = document.createElement('h3');
h3.innerText = "hey, I am blue h3."; // add text to para
document.querySelector('body').append(h3);

h3.classList.add("blue");


//Q3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in a div";
para2.innerText = "Me Too";

div.append(h1);
div.append(para2);
div.classList.add("box"); // it gives style

document.querySelector("body").append(div); // it run with all properties