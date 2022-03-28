/*
The program you are given takes year, month and day as input.
Create a function that takes them as arguments and returns the corresponding day of the week.
Sample Input
1993
7
12
Sample Output
Thursday
Hint: The given code creates a Date object from the parameters. Use the getDay() method of the date object to get the index, then use it in the given names array to return the name of the day.
*/

function main() {
    var year = parseInt(readLine(), 10);
    var month = parseInt(readLine(), 10);
    var day = parseInt(readLine(), 10);

    console.log(getWeekDay(year, month, day));
}

function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
    var dayOfTheWeek = d.getDay()
    return names[dayOfTheWeek];
}