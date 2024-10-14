// // variable dan oprters
// //1. js variabel
// let fullName = "John Doe"; //camel case
// let full_Name = "John Doe"; //snake case
// let FullName = "John Doe"; // pascal case

// const gender = "male"; //saat const sudah di deklrasi harus di input nilai
// //gender = "female" //error, tidak bisa di ubah jika menggunakan const

// let age = 30; //number int
// age = 31;
// let weight = 85.5; //number float
// let isMerried = true; //Bolean
// let grade = null; //Null
// let address; //undifind

// console.log(fullName);
// console.log(gender);
// console.log(age);
// console.log(weight);
// console.log(isMerried);
// console.log(grade);
// console.log(address);

// //2. operators
// //operator aritmatik
// let bil1 = 20;
// let bil2 = 5;

// console.log(bil1 + bil2); //25
// console.log(bil1 - bil2); //15
// console.log(bil1 * bil2); //100
// console.log(bil1 & bil2); //0
// console.log(bil1 ** bil2); //3200000
// console.log(bil1 / bil2); //4

// //string oprtrs
// let firstName ="john";
// let lastName ="Deo";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Relational oprts (==, ===, >, <, >==, <==, dll)
// let bil1 = 10;
// let bil2 = 10;
// let bil3 = "10"

// console.log(bil1 == bil2)//true
// console.log(bil1 === bil2)//true
// console.log(bil1 == bil3)//true
// console.log(bil1 === bil3)//false

// //Ternery oprts
// let umur = 17;
// let isEligible = age >= 17? "bisa buat ktp" : "tidak bias buat ktp";
// console.log(isEligible);

//oprtrs logical (&&, ||, !)
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!true); //false
console.log(!false); //true
