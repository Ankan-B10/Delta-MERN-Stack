function savetoDb(data) {
	// return new promices
	return new Promise((resolve, reject) => {
		//resolve=success, reject=failure
		let internetSpeed = Math.floor(Math.random() * 10) + 1;
		if (internetSpeed > 3) {
			resolve("sucess: data was saved");
		} else {
			reject("failure: weak connection");
		}
	});
}

// let request = savetoDb("Apna College"); // req = promices object
// request.then(() =>{
//     console.log("Promise was resolve");
//     console.log(request);
// })
// .catch(() =>{
//     console.log("Promise was rejected");
// })

// improved version - callback hell sol
let request = savetoDb("Apna College")
	.then((result) => {
		// if
		console.log("data1 saved.");
        console.log("Result of promiser",result);
		return savetoDb("hello world");
	})
	.then((result) => {
		//promise chaining
		console.log("data2 saved");
        console.log("Result of promiser",result);
		return savetoDb("Ankan B");
	})
	.then((result) => {
		//promise chaining
		console.log("data3 saved");
        console.log("Result of promiser",result);
	})
	// else
	.catch((error) => {
		console.log("Promise was rejected");
        console.log("error of promiser",error);
	});
