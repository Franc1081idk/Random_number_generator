const max = 100;
const min = 1;
let randNum1;
let randNum2;
let randNum3;

document.getElementById("button").onclick = function () {
  randNum1 = Math.floor(Math.random() * (max - min)) + min + 1;
  number1.textContent = randNum1;
  randNum2 = Math.floor(Math.random() * (max - min)) + min + 1;
  number2.textContent = randNum2;
  randNum3 = Math.floor(Math.random() * (max - min)) + min + 1;
  number3.textContent = randNum3;
  if (randNum1 == 67 || randNum2 == 67 || randNum3 == 67) {
    document.getElementById("67").src = "67.webp";
  } else {
    document.getElementById("67").src = "";
  }
};
