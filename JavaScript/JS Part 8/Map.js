let student = [
  {
    name: "Ankan",
    marks: 98,
  },
  {
    name: "Ram",
    marks: 94,
  },
  {
    name: "Aman",
    marks: 95,
  },
];

let ans = student.map(function (el) {
  return el.marks;
});
console.log(ans);

let cgpa = student.map((el) => {
  return el.marks / 10;
});
console.log(cgpa);
