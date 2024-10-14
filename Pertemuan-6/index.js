// IIFE & Callback Function (IIFE fungsi yang otomatis, tidak memiliki nama)
//1. IIFE(Immediately invoked Function expression)
// a. No params, args & return value
// (function () {
//   console.log("jery");
// })();

// // B. params, args & return value
//  return              //params
// let output = (function (fullName) {
//   return "hello" + fullName;
//     //argm
// })("John Deo");
// console.log(output);

//2. Callback Function (callback adalah fungsi yang di kirim sebagai argument ke fungsi lain, tidak ada nama )
// a. No params, args & return value
//params, bisa diganti namanya
function sayHello(callback) {
  callback();
}

sayHello(function () {
  console.log("Hello word"); // callback function
});

//B. params, args & return value
function sayHello(callback) {
  let result = callback("John Doe");
  return result;
}

let output = sayHello(function (fullName) {
  return "Hello" + fullName;
});
console.log(output);
