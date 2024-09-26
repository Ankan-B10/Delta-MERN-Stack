let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() =>{
    let country = document.querySelector("input").value;
    console.log(country);
    let collegArr = await getColleges(country);
    show(collegArr); // show list of college
});

function show(collegArr){
    let list = document.querySelector("#list");
    list.innerText = ""; // always start with empty string
    for(col of collegArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(err){
        console.log("error = ",err);
        return[]; //empty error
    }
}

// console.log(getColleges());