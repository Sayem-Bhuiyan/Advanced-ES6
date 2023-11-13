const numbers = [3, 4, 64, 34, 23, 53, 21, 15];
const total = numbers.reduce( (previous, current) => previous + current ,0);
console.log(total)


const sum = numbers.reduce( (p, c) => p + c , 0);
console.log(sum)

const ingredients = ['wine', 'onion', 'mushroom'];
const single = ingredients.reduce((sauce, item) => {
    return (sauce + item)
},0)
console.log(single)