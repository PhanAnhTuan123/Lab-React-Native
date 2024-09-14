var infoMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
}
var infoJohn = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.50,
}
function callBMI(mass, height){
    return mass/(height*height);
}
function check(kq1, kq2){
    return kq1 > kq2 ? true : false;
}
function testBMI(obj1, obj2){
    var kq1 = callBMI(obj1.mass, obj1.height);
    console.log(`Giá trị BMI của ${obj1.fullName} =  ${kq1.toFixed(1)}`);
    var kq2 = callBMI(obj2.mass, obj2.height);
    console.log(`Giá trị BMI của ${obj2.fullName} =  ${kq2.toFixed(1)}`);
    var result = check(kq1, kq2);
    console.log
    if(result){
        return  `${obj1.fullName} BMI (${kq1.toFixed(1)}) is higher than ${obj2.fullName} BMI (${kq2.toFixed(1)})!`;
    }else{
        return  `${obj2.fullName} BMI (${kq2.toFixed(1)}) is higher than ${obj1.fullName} BMI (${kq1.toFixed(1)})!`;
    }
};

var kqSoSanh = testBMI(infoMark, infoJohn);
console.log(kqSoSanh);