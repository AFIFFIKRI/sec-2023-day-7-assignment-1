// better use innerText in terms of security

// METHOD 1
// function calculateBmi() {
//   event.preventDefault();

//   let weight = document.getElementById("weight").value;
//   let height = document.getElementById("height").value;

//   let bmi = weight / (height * height);

//   document.getElementById("heading").innerHTML = "Your BMI is";
//   document.getElementById("bmi-output").innerHTML = bmi.toFixed(2);

//   if (bmi <= 18.4) {
//     document.getElementById("bmi-advice").innerHTML =
//       "Underweight : You need to eat more or consult a doctor";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     document.getElementById("bmi-advice").innerHTML =
//       "Ideal : Good job for taking care of your health";
//   } else {
//     document.getElementById("bmi-advice").innerHTML =
//       "Overweight : You need to exercise";
//   }
// }

// DOM VARIABLE
let heightDOM = document.querySelector("#height");
let weightDOM = document.querySelector("#weight");
let calculateBtnDOM = document.querySelector("#calculate-btn");
let bmioutputDOM = document.querySelector("#bmi-output");
let bmiadviceDOM = document.querySelector("#bmi-advice");

calculateBtnDOM.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  console.log(weightDOM.value, heightDOM.value);

  let bmi, yourbmi, weight, height;

  // VARIBALE VALUE
  weight = weightDOM.value;
  height = heightDOM.value;
  bmi = weight / height / height;

  // PSEUDOCODE
  if (bmi <= 18.4) {
    yourbmi = "Underweight : You need to eat more or consult a doctor";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    yourbmi = "Ideal : Good job for taking care of your health";
  } else {
    yourbmi = "Overweight : You need to exercise";
  }

// INSERT VALUE INTO DOM INNERTEXT 
  bmioutputDOM.innerText = "Your BMI is : " + bmi.toFixed(2);
  bmiadviceDOM.innerText = yourbmi;
});
