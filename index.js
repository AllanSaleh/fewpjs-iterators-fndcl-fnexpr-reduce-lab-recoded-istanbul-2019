const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = ()=>{
    return batteriesBatch.reduce(function(acc,elem){return acc+elem},0);
}

console.log(totalBatteries())