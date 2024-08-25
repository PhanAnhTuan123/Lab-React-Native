// Function to calculate average score
function calculateAverage(scores) {
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

// Function to determine the winner
function determineWinner(dolphinsScores, koalasScores) {
    const dolphinsAverage = calculateAverage(dolphinsScores);
    const koalasAverage = calculateAverage(koalasScores);

    console.log(`Dolphins' average score: ${dolphinsAverage.toFixed(2)}`);
    console.log(`Koalas' average score: ${koalasAverage.toFixed(2)}`);

    if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
        console.log("Dolphins win the trophy!");
    } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
        console.log("Koalas win the trophy!");
    } else if (dolphinsAverage >= 100 && koalasAverage >= 100 && dolphinsAverage === koalasAverage) {
        console.log("It's a draw!");
    } else {
        console.log("No team wins the trophy.");
    }
}

// Test data
console.log("Test Data 1:");
determineWinner([96, 108, 89], [88, 91, 110]);

console.log("\nBonus 1:");
determineWinner([97, 112, 101], [109, 95, 123]);

console.log("\nBonus 2:");
determineWinner([97, 112, 101], [109, 95, 106]);
