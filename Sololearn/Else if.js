/*
Тhe result of an exam will be determined as follows։
If the score is
88 and above => excellent
40-87 => good
0-39 => fail
You are given a program that takes the score as input.
Task
Complete the code to output the corresponding result (excellent, good, fail) to the console.
Sample Input
78
Sample Output
good
Use console.log() to output the result to the console.
Use logical operator && to chain multiple conditions.
*/

var score = parseInt(readLine(), 10)

if (score >= 88) console.log("excellent");
else if (score >= 40 && score < 88) console.log("good");
else console.log("fail");