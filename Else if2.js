/*
A store is offering a tiered discounts based on the purchase total.
5000 and above => 50%
3000-4999 => 30%
1000-2999 => 10%
1-999 => 0%
Write a program that takes the total price as input and outputs the corresponding discount to the console.
Sample Input
4700
Sample Output
30%
Use logical operator && to chain multiple conditions.
*/

function main() {
    var totalPrice = parseInt(readLine(), 10)
    if (totalPrice >= 5000) console.log("50%");
    else if (totalPrice >= 3000 && totalPrice <= 4999) console.log("30%");
    else if (totalPrice >= 1000 && totalPrice <= 2999) console.log("10%");
    else if (totalPrice >= 1 && totalPrice <= 999) console.log("0%");
}