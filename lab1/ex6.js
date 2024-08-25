// Function to calculate the tip based on the bill value
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Test data
const bills = [125, 555, 44];

// Calculate tips for each bill using the calcTip function
const tips = bills.map(calcTip);

// Calculate total values (bill + tip) for each bill
const total = bills.map((bill, index) => bill + tips[index]);

// Output results
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", total);
