let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let randomColor = getRandom();
    h3.innerText = randomColor;

    let divi = document.querySelector("div");
    divi.style.backgroundColor = randomColor;

    console.log("Color updated");
});

function getRandom(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    
    let color = `RGB(${red}, ${green}, ${blue})`;
    return color; 
}

let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("para was clicked");
});

let boxi = document.querySelector(".box");
boxi.addEventListener("mouseenter", function(){
    console.log("box is hover by mouse")
});