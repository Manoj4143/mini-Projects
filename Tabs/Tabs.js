let aboutButtonElement = document.getElementById("aboutButton");
let timeToVisitButtonElement = document.getElementById("timeToVisitButton");
let attractionsButtonElement = document.getElementById("attractionsButton");

let aboutTabElement = document.getElementById("aboutTab");
let timeToVisitTabElement = document.getElementById("timeToVisitTab");
let attractionsTabElement = document.getElementById("attractionsTab");

aboutButtonElement.onclick = function() {

    aboutTabElement.classList.remove("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");
};

timeToVisitButtonElement.onclick = function() {

    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.remove("d-none");
    attractionsTabElement.classList.add("d-none");
};

attractionsButtonElement.onclick = function() {

    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.remove("d-none");
};