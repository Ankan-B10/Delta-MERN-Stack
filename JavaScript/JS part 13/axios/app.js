let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

async function getFacts() {
	try {
		let res = await axios.get(url); // await bcoz URL is run with JS
		return res.data.fact;
	} catch (err) {
		console.log("Error = ", err);
        return "no fact found";
	}
}
// console.log(getFacts());
