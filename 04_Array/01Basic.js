// Array 

const array = [1,3,3,5,6 ]
console.log(array)

const Myheros = ["ironman","Spiderman", " Thor ", "Hulk "]
console.log(Myheros)

const myArray = new Array(1,3,2,3,4)
console.log(myArray[1])

// Array methods 

myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)
console.log(myArray)
myArray.shift()
console.log(myArray)

const newArr = myArray.join()
console.log(newArr)

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log("B", myn1);
