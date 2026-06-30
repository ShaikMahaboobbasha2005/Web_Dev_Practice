/*
========================================
Project: Event Playground

Description:
This project demonstrates different mouse events using
addEventListener(). Each button responds to a different
mouse interaction such as click, double-click, hover,
and random color generation.

Concepts Practiced:
- addEventListener()
- click
- dblclick
- mouseenter
- mouseleave
- Event Object
- DOM Manipulation
========================================
*/

const h1 = document.querySelector('h1')
const buttons = document.querySelectorAll('button')

// h1 turns to Button Clicked when 1st button is clicked

buttons[0].addEventListener('click',function (){
    h1.innerText = "Button Clicked"
})

//Background color changes to light green when 2nd button is double clicked

buttons[1].addEventListener('dblclick',function (){
    document.body.style.backgroundColor = 'silver'
})

//3rd button text changes to You're Hovering! when hovered

buttons[2].addEventListener('mouseenter',function (){
   buttons[2].innerText = `You're Hovering!`
})
buttons[2].addEventListener('mouseleave',function (){
   buttons[2].innerText = 'Hover Over Me'
})

//Function to generate random color

const randColor = () => {
    const r = Math.floor(Math.random()* 255)
    const g = Math.floor(Math.random()* 255)
    const b = Math.floor(Math.random()* 255)
    return `rgb(${r},${g},${b})`
}

//4th button's background color changes to random color when clicked

buttons[3].addEventListener('click',function (){
   buttons[3].style.backgroundColor = randColor()
})
