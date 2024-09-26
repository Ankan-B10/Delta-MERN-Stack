const doubleReturn = (arr, ...args) => [...arr, ...args.map((v) => v * 2)];
console.log(doubleReturn([1, 2, 3], 4, 4)); //[1,2,3,8,8]
console.log(doubleReturn([2], 10, 4));
