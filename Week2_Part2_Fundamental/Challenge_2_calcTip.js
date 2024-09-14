var bills = [125, 555, 4];
function callTip(bills){
    var tips = [];
    var tip;
    for(var value of bills){
        if(value >= 50 && value <= 300){
            tip = value * 15 / 100;
            tips.push(tip);
        }else{
            tip = value * 25 / 100;
            tips.push(tip);
        }
    }
    return tips;
}

var tipArr = callTip(bills);
console.log(tipArr)

var tipArr2 = bills.map(function(element){
    return element >= 50 && element <= 300 ? element*15/100 : element*25/100;
});

console.log(tipArr2);