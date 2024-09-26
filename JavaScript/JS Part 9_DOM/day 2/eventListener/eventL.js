// eventListener is VVI
let btns = document.querySelectorAll("button")

for (btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("You clicked double")
    });
}

function sayHello(){
    alert("Hello ji");
}
function sayName(){
    alert("Ankan Bera")
}