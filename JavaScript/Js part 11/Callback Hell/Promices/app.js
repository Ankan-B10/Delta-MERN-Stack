// h1 = document.querySelector("h1");

// function changColor(color, delay, nextColorChange){ //nextColorChange is callback func
//     setTimeout(()=>{
//       h1.style.color = color;
//       if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changColor("red", 1000, ()=>{ // Nesting Callbacks -> callback hell
//     changColor("orange", 1000, ()=>{
//         changColor("purple", 1000, ()=>{
//             changColor("yellow", 1000);
//         });
//     });
// });

// Callbacks hell happens


/// To solve Callback hell -> promices, async, await

function savetoDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success();
    }
    else{
        failure();
    } 
}
 
savetoDb("apna college", () =>{
    console.log("success: Your data was saved.");
    savetoDb("hello world", () =>{
        console.log("success2: data2 was saved.");
        savetoDb("Ankan", ()=>{
            console.log("success3: data3 was saved.");
        },
        ()=>{
            console.log("failure3: Week connection.");
        }
    );
    },
    ()=>{
        console.log("failure2: Week connection.");
    }
);
},
()=>{
    console.log("failure: Week connection. data not saved");
});




