function hitungBMI(berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  return bmi;
}
let berat = 80;
let tinggi = 1.81;

let bmi = hitungBMI(berat, tinggi);
console.log("berat anda : " + berat + "kg");
console.log("tinggi anda :" + tinggi + "cm");
console.log("BMI Anda adalah:" + bmi.toFixed(2));
