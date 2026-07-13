/*
========================================
Project: Promise Playground

Description:
This project demonstrates how JavaScript
Promises replace callback hell.

Each pizza preparation step returns a
Promise that resolves after 2 seconds.

The promises are chained using .then(),
making the code much cleaner than
nested callbacks.

Concepts Practiced:
- Promise
- resolve()
- reject()
- .then()
- .catch()
- .finally()
========================================
*/

const orderBtn = document.querySelector('.order');
const ul = document.querySelector('ul');

const addStep = (msg) => {
    const newLi = document.createElement('li');
    newLi.innerText = msg;
    ul.append(newLi);
};

const pizzaStep = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random() > 0.2;

            if (rand) {
                addStep(msg);
                resolve();
            } else {
                reject('⚠️ Something went wrong');
            }
        }, 2000);
    });
};

orderBtn.addEventListener('click', function () {
    pizzaStep('🍕 Order Received')
        .then(() => {
            return pizzaStep('👨‍🍳 Preparing Dough');
        })
        .then(() => {
            return pizzaStep('🧀 Adding Cheese');
        })
        .then(() => {
            return pizzaStep('🫒 Adding Toppings');
        })
        .then(() => {
            return pizzaStep('🔥 Baking Pizza');
        })
        .then(() => {
            return pizzaStep('🛵 Out For Delivery');
        })
        .then(() => {
            return pizzaStep('✅ Pizza Delivered');
        })
        .catch((error) => {
            addStep(error);
        });
});