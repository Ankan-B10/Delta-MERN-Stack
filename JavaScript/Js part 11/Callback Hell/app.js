h1 = document.querySelector("h1");


// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="green";
// },2000);

// To sort the above code ->
function changColor(color, delay, nextColorChange){ //nextColorChange is callback func
    setTimeout(()=>{
      h1.style.color = color;
      if(nextColorChange) nextColorChange();
    }, delay);
}

changColor("red", 1000, ()=>{ // Nesting Callbacks -> callback hell
    changColor("orange", 1000, ()=>{
        changColor("purple", 1000, ()=>{
            changColor("yellow", 1000);
        });
    });
});

// Callbacks hell happens
// To solve Callback hell -> promices, async, await