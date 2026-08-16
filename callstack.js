// how code executes  in javaSCript 

/* 

--> {} Global Execution Context  - this

-->  functionsl Execution Context 
--> Eval execution Context 


{ } -->  Memory Creation Phase  -- memory allocation 
    -->  execution Phase 



*/

let val1 = 10
let val2 = 5

function addNum (num1 , num2 ){
     let total = num1+num2
     return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

/*
  Step - 01 
  
  global execution  -> this 

  Step -02 Memory Creation  Phase 
   val 1 -> undefind
   val 2 -> undefind

   addnum -> defination 
    result 1  -> undefined  
    result 2 -> undefined 

    step 03 

    execution Phase 
     val1 -> 10
     val2 -> 5
     total -> 15

     add Num -> new variavble env + execution thearte    - Delete after execution 
         
       -[ Memory Phase ]             -[ Execution Context ]

       --> val1 - undefinde              num1 - 10 
       --> val2 - undefinde              num2 - 5 
           total - undefind               total - 15 

         --> return in Global Execuution Context 


           [ New variable Environment 
              /Memory Execution Pahse                              / Ececutuion pahse 
               repeat all Stuff 

           ]


*/


/* Call Stack 




------------------    one() , two () , three()    | last in First Out ( LIFO )
Global  execution 


*/

function one(){
    console.log(" one ");
    two()
    
}

function two(){
    console.log(" two ");
    three()
    
}



function three(){
    console.log(" three ");
    
}


one()
two()
three()