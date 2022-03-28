/*
Students need to score at least 70 points to pass an exam. The given program declares an array with results.
Write a program to count and output to the console the number of students who pass the exam.
Use a for...of loop to iterate through the array.
*/

let scores = [68, 95, 54, 84, 77, 75, 63, 74, 69, 80, 71, 63]

var result = 0;
for (let score of scores) {
    if (score >= 70) {
        result++
    }
}

console.log(result);