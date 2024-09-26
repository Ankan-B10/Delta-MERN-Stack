let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ", event.code);
    if(event.code == "KeyU"){
        console.log("character moves forward");
    }
    else if(event.code == "KeyD"){
        console.log("character moves backward");
    }
    else if(event.code == "KeyL"){
        console.log("character moves left");
    }
    else if(event.code == "KeyR"){
        console.log("character moves right");
    }
});