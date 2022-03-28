/*
The program you are given should calculate the annual income of a given loan.
The program takes the loan initial amount and the annual interest percentage as input, then creates the loan object.
Complete the function outside the constructor to calculate the annual income, then assign that value to the corresponding field, that you also create, of the constructor in order to execute the given output.
Sample Input
15000
20
Sample Output
3000
Explanation
The output represent the yearly income of the loan with a 15000 initial amount and 20% annual interest : 20/100*15000 = 3000.
You should create a new property in the constructor to store the annual income value returned from the calculating function.
*/

function main() {
    var amount = parseInt(readLine(), 10);
    var yearPercent = parseInt(readLine(), 10);

    var loan1 = new Loan(amount, yearPercent);

    console.log(loan1.yearIncome());
}

function Loan(amount, percent) {
    this.amount = amount;
    this.yearPercent = percent;
    this.yearIncome = calcYearIncome;
};

function calcYearIncome() {
    return this.amount * this.yearPercent / 100;
}