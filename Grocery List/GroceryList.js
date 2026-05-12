let bgContainerEl = document.createElement("div");

bgContainerEl.classList.add(
    "bg-red-300",
    "p-8",
    "min-h-screen"
);

document.body.appendChild(bgContainerEl);

let headingElement = document.createElement("h1");

headingElement.classList.add(
    "font-bold",
    "text-4xl",
    "text-center",
    "mb-5"
);

headingElement.textContent = "Grocery List";

bgContainerEl.appendChild(headingElement);

let listcontainerElement = document.createElement("ul");

listcontainerElement.classList.add(
    "bg-black",
    "rounded",
    "py-8",
    "px-8",
    "list-disc",
    "text-white"
);

bgContainerEl.appendChild(listcontainerElement);

let groceryitems = [
    "Milk",
    "Apple",
    "Mango",
    "coco-powder",
    "butter"
];

for (let groceryitem of groceryitems) {

    let listitem = document.createElement("li");

    listitem.textContent = groceryitem;

    listcontainerElement.appendChild(listitem);
}

let buttonContainerEl = document.createElement("div");
buttonContainerEl.className = "text-center";

let btnel = document.createElement("button");
btnel.classList.add("bg-blue-600", "text-white", "py-2", "px-4", "rounded", "mt-4");
btnel.textContent = "Proced to play"
buttonContainerEl.appendChild(btnel)
bgContainerEl.appendChild(buttonContainerEl)