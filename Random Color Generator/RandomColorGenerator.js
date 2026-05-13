let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let buttonElement = document.getElementById("button");
let bgContainerElement = document.getElementById("bgContainer");

buttonElement.onclick = function() {

    let randomIndex = Math.ceil(Math.random() * bgColorsArray.length - 1);

    bgContainerElement.style.backgroundColor = bgColorsArray[randomIndex];
};