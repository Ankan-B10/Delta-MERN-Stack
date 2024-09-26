let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(){
//     console.log("key is pressed"); // keydown tell amout of keypress
// });

inp.addEventListener("keyup", function(event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    console.log("key is release"); // keyup action after you enter a value, it didn't appear if you press a letter
});

