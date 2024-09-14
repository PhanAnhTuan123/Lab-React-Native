var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
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
function avgBill(bills){
    var length = bills.length;
    var result = 0;
    for(var value of bills){
        result += value;
    }
    return (result/length).toFixed(2);
}

console.log('Danh sách hoá đơn của khách cần trả: ', bills)
var tipArr = callTip(bills);
console.log('Danh sách tip của khách cần trả: ', tipArr)

var tipArr2 = bills.map(function(element){
    return element >= 50 && element <= 300 ? element*15/100 + element : element*25/100 + element;
});

console.log('Danh sách tổng tiền khách phải trả: ', tipArr2);
console.log(`Giá trị trung bình hoá đơn khách phải trả: ${avgBill(tipArr2)}$` );