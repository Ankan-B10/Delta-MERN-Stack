const classInfo = {
    ankan:{
        grade: "A+",
        city: "kolkata"
    },
    aman:{
        grade: "A",
        city: "delhi"
    },
    shradha:{
        grade: "O",
        city: "pune"
    },
}

console.log(classInfo);


console.log(classInfo.aman.city);

classInfo.aman.city = "mumbai";
console.log(classInfo.aman);