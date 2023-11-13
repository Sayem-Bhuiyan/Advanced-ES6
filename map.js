const numbers = [4, 5, 2, 8, 10];

function doubleIt (num){
    // console.log('num now', num)
    return num * 2;
}

const double2 = num => num * 2;
const output = numbers.map(double2);
console.log(output);


const output2 = numbers.map( num => num * 3);
console.log(output2)

const result = numbers.map(doubleIt)
console.log(result)
// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double)
// }
// console.log(doubled)