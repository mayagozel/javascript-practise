/*
"Do not save what is left after spending; instead spend what is left after saving." said Warren Buffett. Inspired by these words Jack decided to save 15% of his monthly salary.
You are given a program that takes salary as input. Complete the function in order to calculate and output the savings.

Sample Input
200

Sample Output
30
Remember to pass the argument when you call the function.
*/

function main() {
    var salaryAmount = parseInt(readLine(), 10);
    // complete the function call
    getSavings(salaryAmount);
}
//complete the function
function getSavings(salaryAmount) {
    console.log(salaryAmount * 15 / 100);
};