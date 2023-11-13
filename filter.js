// filter select elements based on a condition and returns an array with the elements that fulfiled the condition

const numbers = [1, 4, 6, 3, 15];
const players = [76, 67, 76, 75, 65, 62, 59, 70]

const selected = players.filter(p => p > 70)
const evenHeight = players.filter(p => p % 2 == 0);
// console.log(evenHeight)
// console.log(selected)

const friends = ['Sayem', 'Akash', 'Shajib', 'Tipu'];
const evenFriends = friends.filter(name => name.length % 2 === 0);
console.log(evenFriends)

const oddFriends = friends.filter(name => name.length % 2 === 1);
console.log(oddFriends)