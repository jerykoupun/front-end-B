// Rest Parameter & Spread Operator

// 1. Rest Parameters (Membantu saat kita memiliki fungsi yang banyak parameter), params bersifat array

// tanpa rest parameters
const func1 = (param1, param2, param3) => {
  console.log(param1, param2, param3);
};

func1("A", "B", "C");

// Dengan rest Parameter
const func2 = (...params) => {
  console.log(params);
};

func2("A", "B", "C", "D", "E");

//Rest parameter harus berada di terakhir dalam parameter list
const func3 = (params1, params2, ...params) => {
  console.log(params1, params2);
  console.log(params);
};

func3("A", "B", "C", "D", "E");

// Mini Exercise
const penjumlahan = (...angka) => {
  let hasil = 0;
  arr.forEach((item) => (hasil += item));
  return hasil;
};

console.log(penjumlahan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//2. Spread Opereter
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
comsole.log(...numbers); // Spread (sebarkan item-item dalam array)

// fungsi spread pada array
// 1. Duplikasi array
let number2 = [...numbers];
numbers.push(6);
console.log(number2);

// 2. Menggabungkan array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers4 = [...array1, ...array2, ...array3];

// Fungsi Spread pada Objek
// 1. duplikasi objek
const john = {
  fullName: "John Doe",
  age: 30,
};

const john2 = { ...john, address: "Manado" };

// Menggabungkan objek
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let combinedObj = { ...obj1, ...obj2 };
