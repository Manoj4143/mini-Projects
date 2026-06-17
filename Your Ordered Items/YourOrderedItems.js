let itemList = [{
        itemName: "Veg Biryani",
        uniqueNo: 1,
    },
    {
        itemName: "Chicken 65",
        uniqueNo: 2,
    },
    {
        itemName: "Paratha",
        uniqueNo: 3,
    }
];

let orderedItemsContainer = document.getElementById("orderedItemsContainer");

let heading = document.createElement("h1");
heading.textContent = "Your Ordered Items";
orderedItemsContainer.appendChild(heading);

let ul = document.createElement("ul");
orderedItemsContainer.appendChild(ul);

for (let item of itemList) {

    let li = document.createElement("li");
    li.id = "item" + item.uniqueNo;
    ul.appendChild(li);

    let label = document.createElement("label");
    label.textContent = item.itemName;
    li.appendChild(label);

    let btn = document.createElement("button");
    btn.textContent = "Cancel";
    btn.id = "button" + item.uniqueNo;

    btn.classList.add("ml-4", "mb-2");
    btn.style.height = "40px";
    btn.style.backgroundColor = "red";
    btn.style.color = "#fff";
    btn.style.borderRadius = "8px";

    li.appendChild(btn);

    btn.onclick = function() {
        ul.removeChild(li);
    };
}