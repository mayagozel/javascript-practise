/*
The user can choose the color theme for the browser:
1. Light
2. Dark
3. Nocturne
4. Terminal
5. Indigo
You are given a program that takes
the number as input. Complete the program so that it will output to the console the theme according to input number.
Sample Input
2
Sample Output
Dark
Don't forget to use break for each case statement.
*/

function main() {
    var themeNumber = parseInt(readLine(), 10)
    switch (themeNumber) {
        case 1:
            console.log("Light");
            break;
        case 2:
            console.log("Dark");
            break;
        case 3:
            console.log("Nocturne");
            break;
        case 4:
            console.log("Terminal");
            break;
        case 5:
            console.log("Indigo");
            break;
    }
}