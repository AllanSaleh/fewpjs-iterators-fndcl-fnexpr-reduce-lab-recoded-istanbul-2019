const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let batteriesBatch = [{amount: 2},{amount: 5}, {amount: 9}]

let totalBatteries = ()=>{
    return batteriesBatch.reduce(function(acc,elem){return acc+elem.amount},0);
}

console.log(totalBatteries())