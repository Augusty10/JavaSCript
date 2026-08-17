// Array Specific loop 

["", "", ""]

[{},{},{}]

const arr = [1,2,3,4,5]

for (const num  of arr) {
    //  console.log(num);
}


const greetings = " hello world "

for (const greet  of greetings) {
    console.log(` Each char is ${greet}`);
}

// maps 

const map = new Map()
map.set('USA', " United States of America")
map.set('AUS' , "Australia ")
map.set("IND", "India ")

// console.log(map);

for (const [key, value ] of map) {
    console.log(key , ':- ');
    
}

 const myOBJ = {
     'game1' : 'NFS ',
     'game2': 'Spiderman ' 
    
    }

for (const [key , value ] of object) {
    
}