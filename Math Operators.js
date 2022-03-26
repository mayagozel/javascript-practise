/*
Math Operators
Time to go shopping!
Everything in the store has been discounted by 20%.
You are given a program that takes the price of an item as input. Complete the program so that it outputs the discounted price to the console.
Sample Input
100
Sample Output
80
Explanation
20 percent of 100 equals to 20 (100 * 20/100), so the discounted price will be 80 (100 - 20).
Remember the division (/) and multiplication (*) operators.
*/

function main() {
    var oldPrice = parseInt(readLine(), 10)
    console.log(oldPrice * 0.8);
}