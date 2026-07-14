/*
========================================
Project: Async/Await Pizza Challenge

Description:
This project rewrites the Promise-based
Pizza Order Simulator using async/await.

Each pizza step returns a Promise, while
the complete order process is controlled
using async, await, and try...catch.

The project demonstrates how async/await
provides cleaner and more readable syntax
for handling Promise-based asynchronous
operations.

Concepts Practiced:
- Promises
- async Functions
- await
- try...catch
- Promise Rejection
- Error Handling
========================================
*/

const orderBtn = document.querySelector('.order')
const ul = document.querySelector('ul')

const addStep = (msg) => {
    const newLi = document.createElement('li')
    newLi.innerText = msg
    ul.append(newLi)
};

const pizzaStep = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random() > 0.2

            if (rand) {
                addStep(msg)
                resolve()
            } else {
                reject('⚠️ Something went wrong')
            }
        }, 2000)
    })
}
async function makePizza() {
    try{
    await pizzaStep('🍕 Order Received')
    await pizzaStep('👨‍🍳 Preparing Dough')
    await pizzaStep('🧀 Adding Cheese')
    await pizzaStep('🫒 Adding Toppings')
    await pizzaStep('🔥 Baking Pizza')
    await pizzaStep('🛵 Out For Delivery')
    await pizzaStep('✅ Pizza Delivered')
    }
    catch(error){
        addStep(error)
    }
}
orderBtn.addEventListener('click',function(){
makePizza()
})
