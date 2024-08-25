// Test data 1
const markMass1 = 78; // kg
const markHeight1 = 1.69; // meters
const johnMass1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Calculate BMIs for Data 1
const markBMI1 = markMass1 / (markHeight1 * markHeight1);
const johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// Determine if Mark has a higher BMI than John
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1:");
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI1}`);

// Test data 2
const markMass2 = 95; // kg
const markHeight2 = 1.88; // meters
const johnMass2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMIs for Data 2
const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Determine if Mark has a higher BMI than John
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("\nData 2:");
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Does Mark have a higher BMI than John? ${markHigherBMI2}`);
