/*
Entrance to the club is only permitted in pairs.
Take the number of customers in the club as input, and, if all of them have a pair, output to the console "Right", otherwise output "Wrong".
Sample Input
14
Sample Output
Right
Do not confuse the = operator with the == operator.
*/

function main() {
    var numberGuests = parseInt(readLine(), 10)
    var pair = numberGuests % 2
    if (pair == 0) {
        console.log("Right");
    } else {
        console.log("Wrong");
    }
}