/*
========================================
Project: Callback Hell Simulation

Description:
This project simulates ordering a pizza
using nested callbacks.

Each step begins only after the previous
step has completed, demonstrating how
callbacks become deeply nested and hard
to maintain.

Concepts Practiced:
- setTimeout()
- Callback Functions
- Nested Callbacks
- Callback Hell
- Asynchronous JavaScript
========================================
*/

const orderBtn = document.querySelector('.order')
const ul = document.querySelector('ul')

const addStep = (msg) => {
  const newLi = document.createElement('li')
  newLi.innerText = msg
  ul.append(newLi)
}
orderBtn.addEventListener('click', function () {

  addStep(`🍕 Order Received`)
  setTimeout(() => {
    addStep(`👨‍🍳Preparing Dough`)
    setTimeout(() => {
      addStep(` 🧀 Adding Cheese`)
      setTimeout(() => {
        addStep(`🫒 Adding Toppings`)
        setTimeout(() => {
          addStep(`🔥 Baking Pizza`)
          setTimeout(() => {
            addStep(`🛵 Out For Delivery`)
            setTimeout(() => {
              addStep(`✅ Pizza Delivered`)
            }, 2000)
          }, 2000)
        }, 2000)
      }, 2000)
    }, 2000)
  }, 2000)
}, 2000)
