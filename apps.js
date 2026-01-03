const counterDisplay = document.getElementById("counter");
const decButtons = document.getElementsByClassName("decrease");
const incButtons = document.getElementsByClassName("increase");
const clButtons = document.getElementsByClassName("clear");

let counter = 0;
decButtons[0].addEventListener("click", function () {
  counter--;
  counterDisplay.innerText = counter;
});

incButtons[0].addEventListener("click", function () {
  counter++;
  counterDisplay.innerText = counter;
});
clButtons[0].addEventListener("click", function () {
  counter = 0;
  counterDisplay.innerText = counter;
});
