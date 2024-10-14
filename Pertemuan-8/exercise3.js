// exercise - 3
//Koupun, Jery

let manusia = {
  firstName: "Jery",
  weight: 50,
  height: 1.61,

  calculateBMI: function () {
    BMI = this.weight / (this.height * this.height);

    if (BMI < 16.0) {
      category = "Severely Underweight";
    } else if (BMI >= 16.0 && BMI <= 18.4) {
      category = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      category = "Normal";
    } else if (BMI >= 25.0 && BMI <= 29.9) {
      category = "Overweight";
    } else if (BMI >= 30.0 && BMI <= 34.9) {
      category = "Moderately Obese";
    } else if (BMI >= 35.0 && BMI <= 39.9) {
      category = "Severely Obese";
    } else if (BMI >= 40.0) {
      category = "Morbidly Obese";
    }
    manusia.BMI = BMI;
    manusia.category = category;
  },
};

manusia.calculateBMI();

console.log("Name :" + manusia.firstName);
console.log("BMI :" + manusia.BMI.toFixed(1));
console.log("Category :" + manusia.category);
