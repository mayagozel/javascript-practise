/*
You are given a program that takes 3 numbers as input.
Complete the given function to calculate the average of those 3 numbers, assign it to the given variable, and output it.

Sample Input
3
6
9

Sample Output
6
Use return statement to return the calculated value and use it through the program.
*/

function main() {
    var num1 = parseInt(readLine(), 10);
    var num2 = parseInt(readLine(), 10);
    var num3 = parseInt(readLine(), 10);

    var average;
    average = avg(num1, num2, num3);

    console.log(average)
}

function avg(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}