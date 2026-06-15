let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodobutton = document.getElementById("addTodobutton");
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo : 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];
let todoCount = todoList.length;
function onAddtodo(){
    let inputElement = document.getElementById("todoUserInput");
    let userInputValue = inputElement.value;
    let uniquenumberCount = todoCount + 1;
    if (userInputValue === ""){
        alert("Enter The Vaid value");
        return;
    }
    let todo = {
        text: userInputValue,
        uniqueNo: uniquenumberCount
    };
    createAndAppendTodo(todo);
    inputElement.value = "";
}
addTodobutton.onclick =function(){
    onAddtodo();
}
function onTodoStatusChange(checkboxId,labelId){
    let checkbox = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    // if (checkbox.checked===true){
    // labelElement.classList.add("checked");
    // }
    // else{
    //     labelElement.classList.remove("checked");
    // }
    labelElement.classList.toggle("checked");
}
function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
}
function createAndAppendTodo(todo) {
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;
    let todoId = "todo"+ todo.uniqueNo;
    
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId; // Fixed
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId,labelId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}
for (let todo of todoList) {
  createAndAppendTodo(todo);
}