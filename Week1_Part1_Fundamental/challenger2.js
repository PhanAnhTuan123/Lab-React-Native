// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �

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
var bmiMark = cal_BMI(heighttMark, weightMark).toFixed(1);  // Lấy đằng sau dấu chấm 1 đơn vị.
console.log("BMI của Mark = " + Math.round(bmiMark));       // làm tròn theo quy tắc 0.5.

var bmiJohn = cal_BMI(heightJohn, weightJohn).toFixed(1);
console.log("BMI của John = " + Math.round(bmiJohn));

// Tạo function so sánh;

function soSanh(John, Mark){
    return John > Mark ? "BMI John cao hơn BMI Mark" : "BMI Mark cao hơn BMI John.";
}
console.log(soSanh(bmiJohn, bmiMark));

var johnCaoHon = `BMI John ${bmiJohn} cao hơn BMI Mark ${bmiMark}`;
var markCaoHon = `BMI Mark ${bmiMark} cao hơn BMI Join ${bmiJohn}`;

function thongBao(John, Mark){
    return John > Mark ? johnCaoHon : markCaoHon;
}
console.log(thongBao(bmiJohn, bmiMark));