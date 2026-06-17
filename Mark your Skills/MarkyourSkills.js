let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    }
];

let container = document.getElementById("skillsContainer");

let headingElement = document.createElement("h1");
headingElement.textContent = "Mark your Skills";
container.appendChild(headingElement);

let ulElement = document.createElement("ul");
container.appendChild(ulElement);

for (let skill of skillList) {
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);

    let checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.id = "checkbox" + skill.uniqueNo;
    liElement.appendChild(checkboxElement);

    let labelElement = document.createElement("label");
    labelElement.id = "label" + skill.uniqueNo;
    labelElement.textContent = skill.skillName;
    labelElement.htmlFor = checkboxElement.id;
    liElement.appendChild(labelElement);

    checkboxElement.addEventListener("change", function() {
        labelElement.classList.toggle("checked");
    });
}