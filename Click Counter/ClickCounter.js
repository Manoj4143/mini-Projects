let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValue.textContent = 0;
} else {
    counterValue.textContent = clickCount;
}

incrementBtn.onclick = function() {
    let updatedCount = parseInt(counterValue.textContent) + 1;

    counterValue.textContent = updatedCount;

    localStorage.setItem("clickCount", updatedCount);
};