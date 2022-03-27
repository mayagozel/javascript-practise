/*
The program you are given takes the radius of a circle as input.
Complete the given function to take the given radius as an argument and return the circumference of the circle.
Sample Input
5
Sample Output
31.42
Hint
Use 2*π*r formula to calculate the circumference of the circle with radius r.
The method toFixed is used to round the number to keep only the decimals given as parameter.
*/

function main() {
    var r = parseInt(readLine(), 10)

    //the output
    console.log(calcCirc(r).toFixed(2));

}

//complete the function
function calcCirc(r) {
    return r * 2 * Math.PI;
}