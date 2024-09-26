let arr = [8, 9, 1, 2, 3, 4, 5, 33];
let num = 5;
let n = arr.length;

//elements larger than num
function getElements(arr, num) {
  for (let i = 0; i < n; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

getElements(arr, num);
