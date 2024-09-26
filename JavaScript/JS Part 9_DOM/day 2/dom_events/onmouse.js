let btns = document.querySelectorAll("button");

for (b of btns){
    b.onmouseenter = function(){
        console.log("you entered a button");
    }
    console.dir(b);
}
