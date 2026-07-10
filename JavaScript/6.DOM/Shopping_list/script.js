const items = [
    "Milk",
    "Eggs",
    "Bread",
    "Butter",
    "Rice",
    "Sugar",
    "Tea Powder",
    "Coffee"
];
const shoppingList = document.querySelector('ul')

for (let i = 0; i < items.length; i++){
    const item = items[i]
    const list = document.createElement('li')
    list.innerText = `🛒 ${item}`
    shoppingList.appendChild(list)
}

