h1 = document.querySelector("h1");

function changColor(color, delay) {
	//nextColorChange is callback func
	return new Promise((resolve, reject) => {
		//Promise return
		setTimeout(() => {
			h1.style.color = color;
			resolve("color changed!");
		}, delay);
	});
}

// let requestPromise = changColor("red", 5000);

changColor("red", 1000)
	.then(() => {
		console.log("red color was completed");
		return changColor("orange", 1000);
	})
	.then(() => {
		console.log("orange color was completed");
		return changColor("green", 1000);
	})
	.then(() => {
		console.log("green color was completed");
		return changColor("blue", 1000);
	})
	.then(() => {
		console.log("blue color was completed");
	});

    
// changColor("red", 1000, () => {
// 	// Nesting Callbacks -> callback hell
// 	changColor("orange", 1000, () => {
// 		changColor("purple", 1000, () => {
// 			changColor("yellow", 1000);
// 		});
// 	});
// });

// Callbacks hell happens
