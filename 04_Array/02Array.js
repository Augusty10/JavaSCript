const marvelHeroes = ["Iron Man", "Captain America ", "Thor"]
const Dc=["Batman", "Superman", "Wonder Woman"]

marvelHeroes.push(Dc)
// console.log(marvelHeroes)

const allheros = marvelHeroes.concat(Dc)
console.log(allheros);


const all_new_Heros = [...marvelHeroes, ...Dc]
console.log(all_new_Heros);



const anotherArray = [1,2,3,[4,5,6],7 ,[6, 7 , 8]]
console.log(anotherArray);

const newOne =anotherArray.flat(infinity)
console.log(newOne);
