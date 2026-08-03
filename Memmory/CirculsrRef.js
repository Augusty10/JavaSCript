const objA = {};
const objB = {};

objA.ref = objB;
objB.ref = objA;

console.log(objA);
console.log(objB);