let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];
let c = document.getElementById("groceryListContainer");
let h = document.createElement("h1");
h.style.color = "#f5f9fd";
h.style.padding = "40px";
c.appendChild(h);
h.textContent = "Grocery List";
let listBox = document.createElement("div");
listBox.style.backgroundColor = "#f5f9fd";
listBox.style.height = "200px";
listBox.style.margin = "30px";
listBox.style.padding = "20px"
listBox.style.borderRadious = "20px";
let ul = document.createElement("ul");
groceryList.forEach(function(item) {
    let li = document.createElement('li');
    // console.log(item)
    li.textContent = item;
    ul.appendChild(li)
});

c.appendChild(listBox);
listBox.appendChild(ul);
c.style.backgroundColor = "#03254c";
c.style.height = "500px";