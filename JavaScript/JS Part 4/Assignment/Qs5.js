let arr = [3,4,1,6,9,11,2];

let maxi = 0;
for(let i=0;i<arr.length;i++){
    if(maxi<arr[i]){
        maxi = arr[i];
    }
}
console.log(maxi);