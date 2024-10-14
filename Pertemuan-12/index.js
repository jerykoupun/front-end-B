// String Literals, Arrow Function & Default Parameter

// String Literals
let fullName = "John Doe";
let age = 33;
let address = "Manado";

let kalimat =
  "Hallo nama saya" +
  fullName +
  "umur saya" +
  age +
  "tahun dan saya tinggal di" +
  address +
  ".";

console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullName}, umur saya${age}, dan saya tinggal di${address}`;
console.log(kalimat2);

// Arrow Function

function sayGreatings1(fullName) {
  return `hallo nama saya${fullName}`;
}
console.log(sayGreatings1("John Doe"));

const sayGreatings2 = (fullName) => `hallo nama saya${fullName}`;
console.log(sayGreatings2("John Doe"));

// Arrow Function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

// Arrow Function pada Callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// Default Parameter
const sayGreatings3 = (fullName, age, address) => {
  if (!fullName === undifind) {
    fullName = "John Doe";
  }
  if (!age) {
    age = 30;
  }
  if (!address) {
    address = "Manado";
  }
  console.log(
    `Hallo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`
  );
};

sayGreatings3();

const sayGreatings4 = (fullName = "John Doe", age = 30, address = "Manado") => {
  console.log(
    `Hallo nama saya ${fullName}, umur saya ${age}, dan saya tinggal di ${address}`
  );
};

sayGreatings4();
