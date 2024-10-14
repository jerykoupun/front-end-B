// Penulisan Js Function

// Function Deklaration
// function greetings(){
//     console.log("hello jery")
// }

// greatings1(); //execut, pemanggilan fungsi

// // Function ekspretion
// let greatings2 = function(){
//     console.log("hello jeryy")
// }

// greatings2(); // pemanggilan fungsi

//Parameter dan argument
// contoh fungsi yang ada input dan output

// cara 1
//Parameter
// function greatings1 (fullName){
//     return "HELLO" + fullName;
// }
//                         // Argument
// let output = greatings1("John Deo")
// console.log(output);

// //cara 2
// let greatings2 = function (fullName){
//     return "hello" + fullName;
// }

// let output2 = greatings2("John Deo")
// console.log(output2);

// Glonal Scope & Local Scope
// let x = 10;

// function foo(){
//     let y = 20; // local Function
//     console.log(x); //10
//     console.log(y); //20
//     if (y > 10){
//         let z = 30; // local blok
//         console.log(z); //30
//         console.log(x);// 10
//         console.log(y);//20
//     }
//     console.log(z); // Error, karna di luar if atau blok
// }

// console.log(y); //Error karna variable y local, tidak bisa di akses di luar fungsi
// console.log(x); //10, global

// foo();
