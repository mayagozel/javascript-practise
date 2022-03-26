/*
Time flies when you’re having fun.
Given a clock that measures 24 hours in a day, write a program that takes the hour as input. If the hour is in the range of 0 to 12, output am to the console, and output pm if it's not.
Sample Input
13
Sample Output
pm
Assume the input number is positive and less than or equal to 24.
*/

function main() {
    var hour = parseInt(readLine(), 10);
    if (hour > 0 && hour <= 12) {
        console.log("am");
    } else if (hour > 12 && hour <= 24) {
        console.log("pm");
    }
}