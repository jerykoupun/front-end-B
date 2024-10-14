// Array Javascript

// Deklari Variable array
// cara 1. Array Literal
// let numbers = [1, 2, 3, 4, 5]; //data di dalam disebut elemen
// console.log(numbers);

// cara 2. kata kunci new
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

// tipe data yang bisa disimpan dalam array
let numbers = [1, 2, 3, 4, 5]; //numbers
let students = ["Jery", "Fedric", "Taufik"]; //string
let john = ["John", 30, true, [80, 90, 50]]; //gabungan dan ada aray dalam aray
console.log(john);

// Array Lenght (menghitung panjang)
console.log(numbers.length);
console.log(students.length);
console.log(john.length);

//cara mengakses element/data tertentu dalam array
// melalui index array. index selalu dimulai dari 0
console.log(numbers[2]); //3
console.log(students[1]); //Jane
console.log(john[2]); //true
console.log(john[3][1]); //90

// mengakses element/ data terakhir dalam array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2[numbers2.length - 1]);

//Array Method
let array = [1, 2, 3, "Hello", false, true];
console.log(array);

//1. toString (mengkonvert isi element menjadi string), pemisanya cuma (,)
console.log(array.toString());
//2. Join (merubah array menjadi string), bisa tentukan pemisa
console.log(array.join("/"));
//3. Pop (hapus index akhir)
array.pop();
console.log(array);
//4. push (Menambah element di index akhir)
array.push("selamat pagi");
console.log(array);
//5. shift (menghapus elemen pertama)
array.shift();
console.log(array);
//6. unshift (menambah di index pertama)
array.unshift("selamat pagi");
console.log(array);
//7. splice (tambah, menghapus dan mengganti element array di index tengah)
array.splice(2, 1); // hapus
console.log(array);
array.splice(1, 1, 1); //ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambah
console.log(array);
//8. concat (menggabungkan array)
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah"];
let makanan = buah.concat(sayur, biji);
console.log(makanan);
//9. slice (memisakan array) (memiliki index pertama dan terakhir)
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);
