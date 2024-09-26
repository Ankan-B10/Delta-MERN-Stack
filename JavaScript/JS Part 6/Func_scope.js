let sum = 54; // global scope
function calSum(a,b){
    let sum = a+b; // sunction scope
    console.log(sum);
}
calSum(2,3);
console.log(sum); // global