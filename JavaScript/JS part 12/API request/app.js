let url = "https://catfact.ninja/fact";

// fetch(url); //promise returns

fetch(url)
	.then((res) => {
		// console.log(res);
        return res.json();
	})
    .then((data) => {
        console.log(data);
        console.log("data1 = ",data.fact);
        return fetch(url); // again req send
    })
    // second req send 
    .then((res) => {
        return res.json(); // promise give/return
    })
    .then((data2) => {
        console.log(data2);
        console.log("data2 = ",data2.fact);
    })
	.catch((err) => {
		console.log("ERROR - ", err);
	});

// API calls work as asynchus
// js don't wait for Api , Api works in background
