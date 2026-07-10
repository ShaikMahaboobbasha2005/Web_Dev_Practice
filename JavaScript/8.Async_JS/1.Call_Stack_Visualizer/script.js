/*
========================================
Project: Call Stack Visualizer

Description:
This project demonstrates how JavaScript executes
functions using the Call Stack. It helps visualize
how functions are pushed onto the stack when called
and popped off after they finish execution.

Concepts Practiced:
- Call Stack
- Function Execution
- Execution Context
- Synchronous JavaScript
========================================
*/


const multiply =(x,y) => x*y
const square = (x) => x*x
const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c)
}
isRightTriangle(3,4,5)


/*
========================================

Description:
This program demonstrates how JavaScript's Call Stack
works when one function calls another.

The isRightTriangle() function checks whether three
numbers can form a right-angled triangle using the
Pythagorean Theorem.

During execution:
1. isRightTriangle() is pushed onto the Call Stack.
2. square(a) executes and returns.
3. square(b) executes and returns.
4. square(c) executes and returns.
5. The comparison is performed.
6. isRightTriangle() returns the final result and is
   removed from the Call Stack.

========================================
*/

