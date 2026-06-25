let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

// Convert JS values to JSON strings
let bikesString = JSON.stringify(bikes);
let personString = JSON.stringify(person);
let todosString = JSON.stringify(todos);

// Get container
let jsonContainer = document.getElementById("jsonContainer");

// Create elements
let bikesElement = document.createElement("p");
let personElement = document.createElement("p");
let todosElement = document.createElement("p");

// Set text content
bikesElement.textContent = bikesString;
personElement.textContent = personString;
todosElement.textContent = todosString;

// Append elements
jsonContainer.appendChild(bikesElement);
jsonContainer.appendChild(personElement);
jsonContainer.appendChild(todosElement);