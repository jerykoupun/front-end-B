// // JavaScript Objek (opjek juga dapat menyimpan banya data, namun perbedaannya objekmemiliki properti dan nilai)

// // Deklarasi onjekt
// // Objekt Literal
// let john = {
//     firstName : "John", // key, value
//     age : 30,
//     isMarried : true,
//     grade : [80, 90, 100],
//     sayGreetings : function () {
//         console.log("hello my name is " + this.firstName);
//     },
//     address : {
//         street : "JL. Arnold Mononutu Airmaidi",
//         city : "Minahaasa utara",
//         provinsi : "Sulawesi utara",
//     },
// };
// console.log(john);

// // Cara mengakses salah satu properti dalam objekt
// // 1. Dot Notation
// console.log(john.firstName);// John

// john.age = 31; // ubah nilai
// console.log(john);
// john.job = "Teacher"; // tambah properti baru
// console.log(john);

// // 2. Bracket notation
// console.log(john["isMarried"]);//true

// //tambah properti
// john["nationality"] = "indonesia";
// console.log(john);

// // Objek Method
// john.sayGreetings();

// // Objekt inside  objekt
// console.log(john.address.city); // cara mengakses objek dalam objek

// //Delate properti dalam objekt
// delete john.grade; // hapus properti
// console.log(john);

// javascript Conditional if else

//1. if - else
// jika suhu hari ini lebih dari atau sama dengan 37,
// tampilkan suhu hari ini panas.
// jika tidak tampilkan suhu hari ini dingin.

let temp = 35;
if (temp >= 37) {
  console.log("suhu hari ini panas");
} else {
  console.log("suhu hari ini dingin");
}

// 2. nasted if ( if - else - if - else)
// jika nilai 100-80 tampilkan grade A
// jika nilai 70-79tampilkan grade B
// jika nilai 50-69 tampilkan grade C
// jika nilai 50 tampilkan grade D

let grade = 100;
if (grade >= 80 && grade <= 100) {
  console.log("Grade A");
} else if (grade >= 70 && grade < 80) {
  console.log("Grade B");
} else if (grade >= 50 && grade < 70) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// 3. Switch - case (tidak boleh digunakan dalam berupa range)
// jika angka 1 tampilkan januari
// jika angka 2 tampilkan februari
// jika angka 4 tampilkan maret
// jika angka 5 tampilkan maret
// jika angka 6 tampilkan maret
// jika angka 7 tampilkan maret
// jika angka 8 tampilkan maret
// jika angka 9 tampilkan maret
// jika angka 10 tampilkan maret
// jika angka 11tampilkan maret
// jika angka 12tampilkan maret

let number = 1;
switch (number) {
  case 1:
    console.log("Januari");
    break;
  case 2:
    console.log("februari");
    break;
  case 3:
    console.log("Maret");
    break;
  default:
    console.log("not found");
    break;
}
