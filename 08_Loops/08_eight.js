// Reducer  Js 

const myNums = [1,2,3]
 const myTotal = myNums.reduce(function(acc , cur){

    console.log(`acc:${acc} and currval: ${cur}`);
    
    return acc+cur 

 }, 
 0 
)

console.log(myTotal);


