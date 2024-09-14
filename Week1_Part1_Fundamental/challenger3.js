// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy

// 1. Tính điểm trung bình cho mỗi đội, sử dụng dữ liệu kiểm tra bên dưới
// 2. So sánh điểm trung bình của các đội để xác định đội chiến thắng trong cuộc thi, 
// và in nó ra bàn điều khiển. Đừng quên rằng có thể có kết quả hòa, vì vậy hãy kiểm tra điều đó 
// nữa (hòa nghĩa là họ có cùng điểm trung bình)
// 3. Phần thưởng 1: Bao gồm yêu cầu đạt điểm tối thiểu là 100. Với quy tắc này, 
// đội chỉ thắng nếu có số điểm cao hơn đội kia, đồng thời 
// đạt ít nhất 100 điểm. Gợi ý: Sử dụng toán tử logic để kiểm tra mức tối thiểu 
// điểm số cũng như nhiều khối else-if   
// 4. Tiền thưởng 2: Điểm tối thiểu cũng áp dụng cho trận hòa! Vì vậy, một trận hòa chỉ xảy ra khi 
// cả hai đội có cùng số điểm và đều có số điểm lớn hơn hoặc bằng 100 
// điểm. Nếu không thì không có đội nào giành được cúp

var point1 =  [90, 100, 110];
var point2 =  [100, 100, 100];

// tinh diem trung binh
function  cal_AVG(arr_point){   
    var result = 0;
    var length = arr_point.length;
    // cach 1: for in: lay thu tu cua element
    // for (var index in arr_point) {
    //     result += arr_point[index];
    //     console.log(result);
    // }
    // return result/length;
    // cach 2: for of: lay value cua element
    for (var vaule of arr_point) {
        result += vaule;
    }
    return `Diem trung binh cua doi nay = `  +result/length + ` diem`;
}

var kq_Dophin = cal_AVG(point1);
console.log(kq_Dophin);

// Kiểm tra điều kiện:
function bonus(arr_point){
    for (const value of arr_point) {
        return value < 100 ? false :  true;
    } 
}

function soSanhDiem(point1, point2){
    if(bonus(point1) && bonus(point2)){
        return cal_AVG(point1) > cal_AVG(point2) ? "Phan thường dành cho doi 1" : "Phần thưởng dành cho đội 2";
    }else if(bonus(point1) && !bonus(point2)){
        return "Phần thưởng dành cho đội 1";
    }else if(!bonus(point1) && bonus(point2)){
        return "Phần thưởng dành cho đội 2";
    }
}

var ketQua = soSanhDiem(point1, point2);
console.log(ketQua);




