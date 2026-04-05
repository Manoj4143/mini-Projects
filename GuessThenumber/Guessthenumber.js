let gameResult = document.getElementById("gameResult");
let RandomNumber = Math.ceil(Math.random()*100);
let userInput = document.getElementById("userInput");
console.log(RandomNumber);
function checkGuess() {
    let  gussedNumber = parseInt(userInput.value);
    if(gussedNumber > RandomNumber){
        gameResult.textContent = "Too High!";
        gameResult.style.backgroundColor = `#FF6B6B`;
    }
    else if(gussedNumber < RandomNumber){
        gameResult.textContent = "Too Low!";
        gameResult.style.backgroundColor = `#4D96FF`;
    }
    else if(gussedNumber === RandomNumber){
        gameResult.textContent = "Congraluation!, You got it right... \n\n It's Party Time";
        gameResult.style.backgroundColor = `#2ECC71`;
    }
    else{
        gameResult.textContent = "Invalid Input";
        gameResult.style.backgroundColor = `red`;
    }
    
}