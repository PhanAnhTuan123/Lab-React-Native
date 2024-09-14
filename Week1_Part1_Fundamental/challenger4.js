function callBMI(mass, height){
    return mass/(height*height);
}
function check(kq1, kq2){
    return kq1 > kq2 ? true : false;
}

var kqMark = callBMI(78, 1.69);
var kqJohn = callBMI(92, 1.95);
console.log(kqMark);
console.log(kqJohn);

var markHigherBMI = check(kqMark, kqJohn);
console.log(markHigherBMI);