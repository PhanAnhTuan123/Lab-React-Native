// Test data 1
const markMass1 = 78; // kg
const markHeight1 = 1.69; // meters
const johnMass1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Calculate BMIs for Data 1
const markBMI1 = markMass1 / (markHeight1 * markHeight1);
const johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// Determine who has a higher BMI for Data 1
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else if (johnBMI1 > markBMI1) {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI1.toFixed(2)})!`);
}

// Test data 2
const markMass2 = 95; // kg
const markHeight2 = 1.88; // meters
const johnMass2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMIs for Data 2
const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Determine who has a higher BMI for Data 2
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
} else if (johnBMI2 > markBMI2) {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
} else {
    console.log(`Mark and John have the same BMI (${markBMI2.toFixed(2)})!`);
}
