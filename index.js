const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//const initialValue = 0
//const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue);

//total batteries = batch barrerys  .reduce().= 31
//                                      ^MDN array----^^^
//const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
//    return element + accumulator;
//})                                                       ^Flat
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue);