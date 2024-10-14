// ubah atau/modifikasi exercise 1
// function hitungBMI(berat, tinggi) {
//     let bmi = berat / (tinggi * tinggi);
//     return bmi;
//   }
//   let berat = 70;
//   let tinggi = 1.7;

//   let bmi = hitungBMI(berat, tinggi);
//   console.log("berat anda : " + berat + "kg");
//   console.log("tinggi anda :" + tinggi + "m");
//   console.log("BMI Anda adalah:" + bmi.toFixed(2));

// //1. IIFE
(function (berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  console.log("Berat Anda : " + berat + "kg");
  console.log("Tinggi Anda : " + tinggi + "m");
  console.log("BMI Anda adalah : " + bmi.toFixed(2));
})(70, 1.7);

//2. Callback function
function hitungBMI(berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
}

hitungBMI(70, 1.7, function (bmi) {
  console.log("BMI Anda adalah: " + bmi.toFixed(2));
});
