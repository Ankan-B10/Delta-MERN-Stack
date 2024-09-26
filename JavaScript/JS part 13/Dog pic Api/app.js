let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
	let link = await getImage();
	let img = document.querySelector("#result");
	img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
	try {
		let res = await axios.get(url2); // await bcoz URL is run with JS
		return res.data.message;
	} catch (err) {
		console.log("Error = ", err);
		return "no Image found";
	}
}
// console.log(getImage());
