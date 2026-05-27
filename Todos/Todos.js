let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoList = [
    {
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function createandAppendTodo(todo) {

    let todoElement = document.createElement("li");

    todoElement.classList.add(
        "todo-item-container",
        "d-flex",
        "flex-row"
    );

    todoItemsContainer.appendChild(todoElement);

    // checkbox
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    // label container
    let labelcontainer = document.createElement("div");
    labelcontainer.classList.add(
        "label-container",
        "d-flex",
        "flex-row"
    );
    todoElement.appendChild(labelcontainer);

    // label
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelcontainer.appendChild(labelElement);

    // delete container
    let deletecontainer = document.createElement("div");
    deletecontainer.classList.add("delete-icon-container");
    labelcontainer.appendChild(deletecontainer);

    // delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add(
        "fas",
        "fa-trash-alt",
        "delete-icon"
    );
    deletecontainer.appendChild(deleteIcon);
}

// calling function
for (let todo of todoList) {
    createandAppendTodo(todo);
}