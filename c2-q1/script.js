const generateNumberBtn = document.getElementById("generateNumberBtn");
const randomNumberDisplay = document.getElementById("randomNumberDisplay");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const itemList = document.getElementById("itemList");

// Generate random number
generateNumberBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberDisplay.textContent = "Random Number : " + randomNumber;
});


let itemCount = 1;

addItemBtn.addEventListener("click", function () {
    itemCount++;
    const newItem = document.createElement("li");
    newItem.textContent = "Item " + itemCount;
    itemList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", function () {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
        itemCount--;
    }
});