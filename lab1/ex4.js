// Function to calculate the tip and total value
function calculateTip(bill) {
    // Calculate the tip using a ternary operator
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    
    // Calculate the total value
    const totalValue = bill + tip;
    
    // Print the results
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
}

// Test data
console.log("Test Data 1:");
calculateTip(275); // Example with bill value 275
calculateTip(40);  // Example with bill value 40
calculateTip(430); // Example with bill value 430
