const numbers = [12, 10, 8, 15, 7];
const double = numbers.map(n => n * 2)
// console.log(double)

const fiveAdded = numbers.map(num => num + 5);
// console.log(fiveAdded)

const half = numbers.map(num => num / 2);
// console.log(half);

const friends = ['Sayem', 'Akash', 'Shajib', 'Tipu'];
const length = friends.map(name => name.length);
const firstLetter = friends.map(friend => friend[0]);

const lastLetter = friends.map(friend => friend[(friend.length)])
console.log(lastLetter)
// console.log(length);
console.log(firstLetter)