//  const coding=["js", "ruby", "java", " Pyhton" , "Cpp"]
//  const value  = coding.foreach((item)=> {
//     console.log(item);
//     return item 

// })

// // for ecah not return  any  value 

// console.log(value);




const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums =myNums.filter(( num) => {
//      return num > 4 
//  } )

//  const newNums =[]

//  myNums.forEach(()=>{
//      if(num>4){
//         newNums.push(num)
//      }

//  })


//  console.log(newNums);



let Books = [





]; 

let userBooks = Books.filter((bk) => bk.genre ==='History')  // No Scope  

userBooks = Books.filter((bk) => {
     return bk.publish >= 2000 && bk.genre ==='history'
    

    })   // with Scope 


console.log(userBooks);

 