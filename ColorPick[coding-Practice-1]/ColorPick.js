let background_Color = document.getElementById("colorPickerContainer");
let changeHexCode = document.getElementById("selectedColorHexCode");

function ChangeBgToGrey(){
    background_Color.style.backgroundColor = "#e0e0e0";
    changeHexCode.textContent = "#e0e0e0";
    changeHexCode.style.color = "#49a6e9";
}
function ChangeBgTogreen(){
    background_Color.style.backgroundColor = "#6fcf97";
    changeHexCode.textContent = "#6fcf97";
    changeHexCode.style.color = "#49a6e9";
}
function ChangeBgToBlue(){
    background_Color.style.backgroundColor = "#56ccf2";
    changeHexCode.textContent = "#56ccf2";
    changeHexCode.style.color = "#49a6e9";
}
function ChangeBgToPurple(){
    background_Color.style.backgroundColor = "#bb6bd9";
    changeHexCode.textContent = "#bb6bd9";
    changeHexCode.style.color = "#49a6e9";
}