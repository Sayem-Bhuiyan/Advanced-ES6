/*
    1. var let const
    2. defualt parameter
    3. template string
    4. arrow function
    5. destructuring and spread operator
    6. Object.keys, Object.values, Object.entries
    7. for of used in array and string
    8. for in used in object
*/ 
const a = 56;
const numbers = [56, 7, 8]
const person = {
    name: 'Sayem Bhuiyan'
}

const massage = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`
console.log(massage);


const square = x => x * x;
const sum = (a, b) => a + b;


const {x, y, z, ...others} = {x: 2, y: 5, z: 3, name: "Sayem", age: 21};
console.log(others);

const [first, second, third, fourth, ...schoolFriends] = ['Sayem', 'Akash', 'Shajib', 'Tipu', 'Fahim', 'Siam', 'Rana', 'Asif']
console.log(schoolFriends)