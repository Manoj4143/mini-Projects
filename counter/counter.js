let counterElement = document.getElementById("counterValue")
function onIncerment(){
    let perviouscounterValue = counterElement.textContent;
    let updatecounterValue = parseInt(perviouscounterValue) + 1;
    counterElement.textContent = updatecounterValue;
    if (updatecounterValue > 0){
        counterElement.style.color = "green";
    }
    else if(updatecounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "Black";  
        }
    
}
function onDecrement(){
    let perviouscounterValue = counterElement.textContent;
    let updatecounterValue = parseInt(perviouscounterValue) - 1;
    counterElement.textContent = updatecounterValue;
    
    if (updatecounterValue > 0){
        counterElement.style.color = "green";
    }
    else if(updatecounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "Black";  
        }
    
}
function onReset(){
    let updatecounterValue = 0;
    counterElement.textContent = updatecounterValue;
    
    if (updatecounterValue > 0){
        counterElement.style.color = "green";
    }
    else if(updatecounterValue < 0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "Black";  
        }
}