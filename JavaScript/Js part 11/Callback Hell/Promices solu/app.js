// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else{
//         failure();
//     } 
// }
 
// savetoDb("apna college", () =>{
//     console.log("success: Your data was saved.");
//     savetoDb("hello world", () =>{
//         console.log("success2: data2 was saved.");
//         savetoDb("Ankan", ()=>{
//             console.log("success3: data3 was saved.");
//         },
//         ()=>{
//             console.log("failure3: Week connection.");
//         }
//     );
//     },
//     ()=>{
//         console.log("failure2: Week connection.");
//     }
// );
// },
// ()=>{
//     console.log("failure: Week connection. data not saved");
// });


function savetoDb(data){ // return new promices
    return new Promise((resolve, reject) => { //resolve=success, reject=failure 
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 3){
            resolve("sucess: data was saved");
        }
        else{
            reject("failure: weak connection");
        }
    })
}
  
savetoDb("Apna College");

