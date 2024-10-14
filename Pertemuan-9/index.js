// Js Loop (Mengakses Array)

// Array Object (Array dan Loop tidak dapat dipisahkan)
let students = [
  {
    id: 1,
    firstName: "John",
    grade: 80,
  },
  {
    id: 2,
    firstName: "Jane",
    grade: 90,
  },
  {
    id: 3,
    firstName: "Bob",
    grade: 100,
  },
];

// console.log(students);
// ("ambil semua data dalam array");

// //1. for-loop
// for (let i = 0; i < students.lenght; i++) {
//   console.log(students[i]);
// }

// //2. While-loop
// let i = 0;
// while (i < students.length) {
//   console.log(students[i].firstName);
//   i++;
// }

//3. do - while loop
let i = 0;
do {
  console.log(students[i].firstName);
  i++;
} while (i < students.length);

//4. Array built-in method
//1. forEach()

students.forEach(function (item) {
  console.log(item.firstName);
});

//2. map()
students.map(function (item) {
  //bedenya dengan foreach adalah map bisa oleh data, bisa return nilai array yang baru
  console.log(item.firstName);
});

//3. filter()
let outputFilter = students.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFilter);

//4. find()
let outputFind = students.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFind);

//5. findIndex()
let outputFindIndex = students.findIndex(function (item) {
  return item.firstName === "Jane";
});
console.log(outputFindIndex);
