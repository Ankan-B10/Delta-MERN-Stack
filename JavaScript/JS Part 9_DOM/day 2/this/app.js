let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });
// h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });
// h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });
// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });

//// OR
function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
btn.addEventListener("click", changecolor); // call the changecolor
p.addEventListener("click", changecolor);
h1.addEventListener("click", changecolor);
h3.addEventListener("click", changecolor);