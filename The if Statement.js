/*
Sundays in Switzerland are protected with Quiet Rules which make it illegal to pursue certain activities.
Taking the day of the week as input, output to the console "Obey the rules" if it is Sunday.
Sample Input
Sunday
Sample Output
Obey the rules
Don't output anything if the input day isn't a Sunday.
*/

function main() {
    var day = readLine();
    var rules = 'Obey the rules';
    if (day == "Sunday") {
        console.log("Obey the rules");
    }
}