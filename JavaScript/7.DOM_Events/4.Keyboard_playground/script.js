/*
========================================
Project: Keyboard Playground

Description:
This project detects keyboard events and
displays the pressed key, key code,
and special actions for arrow keys
and the Enter key.

Concepts Practiced:
- keydown
- keyup
- Event Object
- e.key
- e.code
- DOM Manipulation
========================================
*/

const key = document.querySelector('.key')
const code = document.querySelector('.code')
const status = document.querySelector('.status')

//Listening keydown event for whole document

document.addEventListener('keydown',function (e){

const h1 = document.querySelector('h1')

    key.innerText = e.key
    code.innerText = e.code

        key.innerText =`Key : ${e.key}`
        code.innerText =`Code : ${e.code}`

    if(e.code === 'ArrowUp'){
        status.innerText = `Status : Moving Up`
    }
    else if(e.code === 'ArrowDown'){
        status.innerText = `Status : Moving Down`
    }
    else if(e.code === 'ArrowLeft'){
        status.innerText = `Status : Moving Left`
    }
    else if(e.code === 'ArrowRight'){
        status.innerText = `Status : Moving Right`
    }
    else{
        status.innerText = `Status : Key Pressed`
    }   
})
