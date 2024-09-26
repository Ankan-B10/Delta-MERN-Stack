// function getNum(){
//     console.log(5);
// }

// async function  demo() {
//     getNum();
// }
// console.log(demo());

// // New type
// function randNum(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function callBack(){
//     await randNum(); // await works in async only
//     await randNum();
//     await randNum(); // await = wait for 1 sec
//     randNum();
// }
// console.log(callBack());



h1 = document.querySelector("h1");

function changColor(color, delay) {
	//nextColorChange is callback func
	return new Promise((resolve, reject) => {
		//Promise return
		setTimeout(() => {
            let num = Math.floor(Math.random() * 10)+1;
            if(num > 3){
                reject("Promise rejected");
            }
			h1.style.color = color;
            console.log(`color changed to ${color}`);
			resolve("color changed!");
		}, delay);
	});
}

// let requestPromise = changColor("red", 5000);

//// more optimum 
async function demo() {
    try{
        await changColor("red", 1000);
        await changColor("orange",1000);
        await changColor("green", 1000);
        await changColor("blue",1000);
    }
    catch(err){ //rejection cotroll 
        console.log("error caught");
        console.log(err);
    }
}

console.log(demo());



////// promices ->

// changColor("red", 1000)
// 	.then(() => {
// 		console.log("red color was completed");
// 		return changColor("orange", 1000);
// 	})
// 	.then(() => {
// 		console.log("orange color was completed");
// 		return changColor("green", 1000);
// 	})
// 	.then(() => {
// 		console.log("green color was completed");
// 		return changColor("blue", 1000);
// 	})
// 	.then(() => {
// 		console.log("blue color was completed");
// 	});
