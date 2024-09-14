/** 
Coding Challenge #1
    Mark and John are trying to compare their BMI (Body Mass Index), which is 
    calculated using the formula:
    BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
    and height in meter).
    Your tasks:
    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both 
    versions)
    3. Create a Boolean variable 'markHigherBMI' containing information about 
    whether Mark has a higher BMI than John.
    Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
    m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
    m tall.
*/

// start 
    
//  Lưu chiều cao cân nặng vào biến
var weightMark  = 78;
var heighttMark = 1.69;

var weightJohn = 92;
var heightJohn = 1.95;

//  Tạo function tính BMI

function cal_BMI(height, weights){
    var hei = height*height;
    return (weights / hei);
}
var bmiMark = cal_BMI(heighttMark, weightMark);
console.log("BMI của Mark = " + Math.round(bmiMark));       // làm tròn theo quy tắc 0.5

var bmiJohn = cal_BMI(heightJohn, weightJohn);
console.log("BMI của John = " + Math.round(bmiJohn));

// Tạo function so sánh;

function soSanh(John, Mark){
    return John > Mark ? "BMI John cao hơn BMI Mark" : "BMI Mark cao hơn BMI John.";
}
console.log(soSanh(bmiJohn, bmiMark));



