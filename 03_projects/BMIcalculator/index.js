const form = document.querySelector("form");
const backBtn = document.getElementById("backBtn");

// form.document.addEventListener('submit', function(e){
//  e.prevendDefault()
// })
// console.log(form);

// const form = document.querySelector("form");
backBtn.addEventListener('click', function(){
  window.history.back();
 console.log("asdf")
})
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector(".height").value);
  const weight = parseInt(document.querySelector(".weight").value);
  const result = document.querySelector("#result");
  console.log(height, weight, result);

  if (isNaN(height) || height === "") {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (isNaN(weight) || weight === "") {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //  console.log(bmi);
    //  if (bmi <= 18.5) {
    //    result.innerHTML = `You are underweight. BMI: ${bmi}`;
    //  } else if (bmi >= 18.5 && bmi <= 24.9) {
    //    result.innerHTML = `Normal range. BMI: ${bmi}`;
    //  } else {
    //    result.innerHTML = `Overweight. BMI: ${bmi}`;
    //  }

    let message = "";
    switch (true) {
      case bmi <= 18.6:
        message = `your are under weight = ${bmi}`;
        break;
      case bmi <= 24.9:
        message = `you are fit ${bmi}`;
        break;
      case bmi >= 24.9:
        message = `you are over weight ${bmi}`;
        break;
        default:
         message = `try you BMI again`
      }
      result.innerHTML = message;
  }
});
