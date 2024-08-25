const printForecast = arr => {
    const forecastParts = [];
    
    for (let i = 0; i < arr.length; i++) {
        forecastParts.push(`${arr[i]}oC in ${i + 1} days`);
    }
    
    console.log(`... ${forecastParts.join(' ... ')} ...`);
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
