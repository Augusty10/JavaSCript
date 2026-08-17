// for loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element ==5){
        console.log(" 5 is best Number ");
        
    }
    // console.log(element);
    
}

// console.log(element);



for(let i = 0 ; i<=10 ; i++){

console.log(` Outer loop value : ${ i}`);

    for(let j = 0 ; j<=10; j++){
        // console.log(` innner loop value ${j} is inner loop ${i}`);
        // console.log( i + ` *`+ j ` = ` + i*j );
    }
}



let myarray =[" flash", "batman " , " Superman " ]
// console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}


// Break and Continue 

 for (let index = 1;  index <= 20; index ++ ){

    if (index == 5){
        console.log(` Detected 5 `);
        break

    }
     console.log(`value of i is ${index}`);
     
 }
// Break and Continue 

 for (let index = 1;  index <= 20; index ++ ){

    if (index == 5){
        console.log(` Detected 5 `);
        continue

    }
     console.log(`value of i is ${index}`);
     
 }

