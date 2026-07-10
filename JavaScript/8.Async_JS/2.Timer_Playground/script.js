/*
========================================
Project: Timer Playground

Description:
This project demonstrates JavaScript timer functions
using setTimeout(), setInterval(), clearTimeout(),
and clearInterval().

The application starts a countdown timer that
updates every second. Users can start, stop,
and reset the timer while understanding how
Web APIs schedule asynchronous tasks.

Concepts Practiced:
- setTimeout()
- setInterval()
- clearTimeout()
- clearInterval()
- DOM Manipulation
- Event Listeners
========================================
*/

const h1 = document.querySelector('h1');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let count = 10;
let timerId = null;

// Start Timer
startBtn.addEventListener('click', function () {

    // Prevent multiple timers
    if (timerId) {
        return;
    }

    timerId = setInterval(function () {

        count--;
        h1.innerText = count;

        if (count < 0) {
            h1.innerText = "Time's Up";
            h1.classList.add('timer');

            clearInterval(timerId);
            timerId = null;   // Mark timer as stopped
        }

    }, 1000);

});

// Stop Timer
stopBtn.addEventListener('click', function () {

    clearInterval(timerId);
    timerId = null;

});

// Reset Timer
resetBtn.addEventListener('click', function () {

    clearInterval(timerId);
    timerId = null;

    count = 10;
    h1.innerText = count;
    h1.classList.remove('timer');

});