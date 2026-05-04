/*Task 1 — Grocery List Manager

Create an array of 5 grocery items
Add 2 more items using .push()
Remove the last item using .pop()
Check if "eggs" is in the list using .includes()
Log the final list and its length*/

const groceryItems = ["sugar","flour","eggs","bread","butter"];
groceryItems.push("spices","cream");
groceryItems.pop();
groceryItems.includes("eggs");
console.log(groceryItems);
console.log(groceryItems.length);