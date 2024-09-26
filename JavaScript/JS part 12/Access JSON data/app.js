let jsonRes =
	'{"fact":"Both humans and cats have identical regions in the brain responsible for emotion.","length":81}';

let valiRes = JSON.parse(jsonRes);
console.log(valiRes.fact); 

// create API jason

let student = {
    name: "ANKAN",
    marks : 95,
}
console.log(JSON.stringify(student));