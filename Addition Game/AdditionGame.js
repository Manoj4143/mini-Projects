let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameresultElement = document.getElementById("gameResult");

function restartGame() {

    let firstNumber = Math.ceil(Math.random() * 100);
    let secondNumber = Math.ceil(Math.random() * 100);

    firstNumberElement.textContent = firstNumber;
    secondNumberElement.textContent = secondNumber;

    gameresultElement.textContent = "";
    userInputElement.value = "";
}

restartGame();

function checkResult() {

    let isEqualTo =
        parseInt(firstNumberElement.textContent) +
        parseInt(secondNumberElement.textContent);

    let userInputNumber = parseInt(userInputElement.value);

    if (userInputNumber === isEqualTo) {

        gameresultElement.textContent =
            "Congratulations! You got it right";

        gameresultElement.style.backgroundColor = "#028a0f";

    } else {

        gameresultElement.textContent = "Please Try Again";

        gameresultElement.style.backgroundColor = "#1e217c";
    }
}