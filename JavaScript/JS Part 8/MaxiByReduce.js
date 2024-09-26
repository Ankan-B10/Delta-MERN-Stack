// find maximum in array
let nums = [2, 1, 6, 7, 0, 9, -4];
let result = nums.reduce((max,el) =>{
    if(max>el)
        return max;
    else
        return el;
});

console.log(result);