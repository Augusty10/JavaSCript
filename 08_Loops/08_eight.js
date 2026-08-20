// Reducer  Js 

const myNums = [1,2,3]
 const myTotal = myNums.reduce(function(acc , cur){

    // console.log(`acc:${acc} and currval: ${cur}`);
    
    return acc+cur 

 }, 
 0 
)

// console.log(myTotal);



const shoppingCart =[
    {itemName:"js Course ",
      Price : 5999   
    },

     {itemName:"js Course ",
      Price : 5999   
    },

]

 const priceTopay = tshoppingCart.reduce((item) => acc + item.Price, 0)
