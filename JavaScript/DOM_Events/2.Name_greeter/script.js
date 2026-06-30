/*
Project: Live Username Greeter

Description:
This application updates the heading dynamically as the user types.
If the input field is empty, it displays "Enter Your Username".
Otherwise, it greets the user by displaying "Welcome, <username>".

Concepts Practiced:
- querySelector()
- addEventListener()
- input event
- value
- textContent
- if...else
*/

const input = document.querySelector('input')
const h1 = document.querySelector('h1')


input.addEventListener('input',function(){
const userName = input.value 
const trimmedName = userName.trim()
if(trimmedName === ''){
    h1.innerText = 'Enter Your Username'
}
else if (trimmedName.length > 15){
    h1.innerText = 'Username too long'
}
else{
     h1.innerText = `Welcome, ${trimmedName}`
}

})