// Create an object for Mark
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // in kg
    height: 1.69, // in meters
    calcBMI() {
        this.BMI = this.mass / (this.height ** 2); // Calculate BMI
        return this.BMI;
    }
};

// Create an object for John
const john = {
    fullName: 'John Smith',
    mass: 92, // in kg
    height: 1.95, // in meters
    calcBMI() {
        this.BMI = this.mass / (this.height ** 2); // Calculate BMI
        return this.BMI;
    }
};

// Calculate BMIs for both Mark and John
const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

// Determine who has the higher BMI and log the result
if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI.toFixed(1)}) is higher than ${john.fullName}'s (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI (${johnBMI.toFixed(1)}) is higher than ${mark.fullName}'s (${markBMI.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${markBMI.toFixed(1)})!`);
}
