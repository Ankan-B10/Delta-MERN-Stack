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
	.then(() => {
		// if
		console.log("data1 saved.");
		return savetoDb("hello world");
	})
	.then(() => {
		//promise chaining
		console.log("data2 saved");
		return savetoDb("Ankan B");
	})
	.then(() => {
		//promise chaining
		console.log("data3 saved");
	})
	// else
	.catch(() => {
		console.log("Promise was rejected");
	});
