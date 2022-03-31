/*
You are making a workout app. After completing the basic exercises in the app, the user is able to access advanced content.
The given program declares two classes - basic and advanced with corresponding properties. Complete the code to combine basic and advanced level exercises into one new object named total, so that the given code for final output works correctly.
Use Object.assign() to perform the requested operation.
*/

let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

let total = Object.assign({}, basic, advanced);

for (let ex in total) {
    console.log(total[ex])
};