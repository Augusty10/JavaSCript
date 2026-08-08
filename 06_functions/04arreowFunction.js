
const user ={
    username : "hitesh ",
    price : 999,

    welcomeMessage: function(){
        console.log(`${ this.username }, welcome to the website `);
    }
    

}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);

// function chai (){
//     let username ="hitesh "
//     console.log(this.username );
// }


// const  chai = function (){
//      let username = " hitesh "
     
//      console.log(this. username);
     
// }


const coffee = ()=>{
    let username = "ironman"

}

// coffee()




//  const addThree = (num1 , num2)=>{
//     return num1 + num2

//  }
//  console.log(addThree(2,3 ));
 


 // implicit return 

const addThree = (num1 , num2) => num1 + num2

const addThree = (num1 , num2) => (num1 + num2)

const addThree = (num1 , num2) => ({username : " Hitesh "})

 console.log(addThree(2,3 ));

 const myArry =[2, 5, 3, 7,8 ]

//  myArry.forEach(() => { })