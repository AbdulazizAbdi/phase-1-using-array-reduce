const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;

const sumOfBatteries = batteryBatches.reduce(function(totalBatteries, element){ 
    return totalBatteries += element;
},0)

totalBatteries = sumOfBatteries;
console.log(totalBatteries)