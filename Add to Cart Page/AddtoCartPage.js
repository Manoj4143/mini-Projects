let container = document.querySelector(".container")
let heading = document.createElement("h1");
heading.textContent = "Add To Cart";
container.appendChild(heading);


let rowSelector = document.querySelector(".row");
let inputELement = document.createElement("input");
inputELement.style.width = "200px"
inputELement.style.height = "40px"
inputELement.id = "cartItemTextInput";
container.appendChild(rowSelector);
rowSelector.appendChild(inputELement);

let btn = document.createElement("button");
btn.id = "addBtn";
btn.style.margin = "0px"
btn.style.padding = "10px"
btn.style.height = "40px"
btn.style.width = "80px"
btn.textContent = "Add";
btn.style.color = "#fff"
btn.style.backgroundColor = "blue"
rowSelector.appendChild(btn);

let subheading = document.createElement("h2")
subheading.textContent = "My Cart Items";
rowSelector.appendChild(subheading)


let ul = document.createElement("ul");
rowSelector.appendChild(ul)
btn.addEventListener("click", function() {
    let li = document.createElement("li");
    li.id = "cartItemTextInput";
    li.textContent = inputELement.value;
    ul.appendChild(li);
})