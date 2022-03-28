/*
You are given a program that takes Team 1 and Team 2 football teams goals as inputs accordingly.
Complete the function to take Team 1 and Team 2 goals as arguments and output the final result of the match:
- "Team 1 won", if Team 1's score is higher than Team 2's score
- "Team 2 won", if Team 2's score is higher than Team 1's score
- "Draw", if the scores are equal
Sample Input
3
4
Sample Output
Team 2 won
The function call is already given.
*/

function main() {
    var goalsTeam1 = parseInt(readLine(), 10);
    var goalsTeam2 = parseInt(readLine(), 10);
    finalResult(goalsTeam1, goalsTeam2)

}

function finalResult(goalsTeam1, goalsTeam2) {
    if (goalsTeam1 > goalsTeam2) {
        console.log("Team 1 won");
    } else if (goalsTeam1 < goalsTeam2) {
        console.log("Team 2 won");
    } else if (goalsTeam1 = goalsTeam2) {
        console.log("Draw");
    }
};