const student={
    name: "Ankan",
    age: 20,
    eng: 100,
    math: 100,
    phy: 100,
    getAvg(){
        let avg =(this.eng+this.math+this.phy)/3;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
student.getAvg();

function getVal(){
    console.log(this);
}
getVal();