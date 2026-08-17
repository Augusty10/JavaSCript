const coding = ["js" , " ruby " , " python " , " Cpp"]

// coding.forEach(function (item){
//      console.log(val);

//  })


//  coding.forEach( (item )=> {
//    console.log(item);
//  })



// function printMe(item){
//     console.log(itme );
    
// }

// coding.forEach(printMe) 

coding.forEach((item, index, arr )=> {
    console.log(item , index , arr );
    
})

const myCoding = [
    {
        languageName: "javaScript",
        lagugeFileName:"JS",
    }, 
     {
        languageName: "javaScript",
        lagugeFileName:"JS",
    }, 
     {
        languageName: "javaScript",
        lagugeFileName:"JS",
    }, 
     {
        languageName: "javaScript",
        lagugeFileName:"JS",
    }, 
]

myCoding.forEach((item)=> {
    console.log(item.languageName);
})

