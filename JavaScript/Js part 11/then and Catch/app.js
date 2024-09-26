
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
  
// let request = savetoDb("Apna College"); // req = promices object
// request.then(() =>{
//     console.log("Promise was resolve");
//     console.log(request);
// })
// .catch(() =>{
//     console.log("Promise was rejected");
// })

// Compact way
let request = savetoDb("Apna College")
    .then(() =>{ // if 
        console.log("Promise was resolve");
        console.log(request);
    })
    .catch(() =>{ // else
        console.log("Promise was rejected");
    })

