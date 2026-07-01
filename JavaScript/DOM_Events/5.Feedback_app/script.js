/*
========================================
Project: Mini Feedback App

Description:
This project collects a user's name and feedback,
validates the input, and displays submitted
feedback dynamically on the page.

Concepts Practiced:
- querySelector()
- addEventListener()
- input events
- submit event
- preventDefault()
- createElement()
- appendChild()
- classList
- remove()
========================================
*/

//selecting required elements

const form = document.querySelector('form')
const name = document.querySelector('.name')
const feedback = document.querySelector('.feedback')
const ul = document.querySelector('ul')

// Preventing page refresh due to form submission using preventDefault()

form.addEventListener('submit', function (e){
    e.preventDefault()
    const nameValue = name.value
    const fbValue = feedback.value
    if(nameValue.trim() === '' || fbValue.trim() === ''){
        return;
    }
    else{

        //creating new list and displaying on the same page
        const newLi = document.createElement('li')

           newLi.innerText = `👤 : ${nameValue.trim()}\n 📝 : ${fbValue.trim()}`
           ul.append(newLi)
           name.value = ''
           feedback.value = ''

           newLi.addEventListener('dblclick', function() {
                 newLi.remove()
           })
        
    }

})
