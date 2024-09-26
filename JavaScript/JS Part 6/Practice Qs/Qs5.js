function sum1toN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum+i;
    }
    return sum;
}

console.log(sum1toN(5));
console.log(sum1toN(3));
console.log(sum1toN(10));
console.log(sum1toN(100));
