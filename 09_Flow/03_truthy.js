const userEmail = "heteshBhai.ai" 

if(userEmail){
    console.log(" Got User email ");    
} else {
    console.log(" Dont have user email ");
}

/* 
falsy values

 fasle , 0  , -0 , Bigint On, "" , null  , Undefined , Nan 

*/

/* 
 truthy value 

 "0"  ,  'false' , " ", [] , {} , function (){} -> emapty function 


*/



if(userEmail.length ===0){
    console.log(" Array is  empty  ");
    
}


const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log(" Object is Emppty ");
} 
  
// false == 0  - true 
// true 



// Lofical oprator && , || , 


// Nullish Coaling Operator (??): null ,  undefined 

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10 
// val1 = undefined ?? 15 


val = null ?? 10 ?? 20
console.log(val1);

// terniray oprtor 

// condition ? true : false 


const iceTeaPrice = 100
iceTeaPrice >= 80? console.log(" less then 80 "): console.log(" more then 80");



