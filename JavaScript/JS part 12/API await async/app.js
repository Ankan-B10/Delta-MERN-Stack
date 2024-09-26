let url = "https://catfact.ninja/fact";

async function getFacts() {
	try {
		let res = await fetch(url); // await bcoz URL is run with JS
		let data = await res.json();
		console.log(res);
		console.log(data);
		console.log(data.fact);
        //Callback chain ->
        let res2 = await fetch(url);
		let data2 = await res2.json();
		console.log(data2.fact);

	} catch (err) {
		console.log("Error = ", err);
	}
    console.log("Bye");
}
console.log(getFacts());
console.log("End code");