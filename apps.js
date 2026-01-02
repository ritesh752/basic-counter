const counterDisplay = document.getElementById("counter");
const decButtons = document.getElementsByClassName("decrease");
const incButtons = document.getElementsByClassName("increase");

let counter = 0;
decButtons[0].addEventListener("click",function(){
    counter--;
    counterDisplay.innerText = counter;
})

incButtons[0].addEventListener("click",function(){
    counter++;
    counterDisplay.innerText = counter;
})