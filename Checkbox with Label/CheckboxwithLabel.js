let container = document.getElementById("checkboxWithLabelContainer");
let check = document.createElement("input");
check.id = "checkbox";
check.type = "checkbox";
container.appendChild(check);

let label = document.createElement("label");
label.id = "checkboxLabel";
label.textContent = "Click Me!";
label.setAttribute("for", "checkbox")
container.appendChild(label);