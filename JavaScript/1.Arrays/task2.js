/*Task 2 — Grade Checker

Create an array of 5 marks (out of 100)
Find the highest mark using Math.max(...arr)
Find the lowest using Math.min(...arr)
Check if you passed all subjects (all marks >= 35) using .every()
Log results with a message like "All passed!" or "Failed in some subjects."*/

const marks = [45,56,83,67,90];
const highestMarks = Math.max(...marks);
const lowestMarks = Math.min(...marks);
const allPassed = marks.every(marks => marks >= 35);
if (allPassed){
    console.log("All Passed");
}
else{
    console.log("Failed Better luck next time");
}