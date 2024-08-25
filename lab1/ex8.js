// Function to calculate the tip based on the bill value
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Test data
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Arrays to hold tips and totals
const tips = [];
const totals = [];

// Loop through the bills array to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    const tip = calcTip(bill);
    tips.push(tip);
    totals.push(bill + tip);
}

// Function to calculate the average of an array
const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Calculate the average of the totals array
const averageTotal = calcAverage(totals);

// Output the results
console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Totals: ", totals);
console.log("Average Total: ", averageTotal.toFixed(2));
