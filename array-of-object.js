const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 53000},
    {id: 4, name: 'mac', price: 153000},
]

// map
const procuctSName = products.map(product => product.name);
// console.log(procuctSName)

const prices = products.map(p => p.price);
// console.log(prices);

// forEach
products.forEach(element => {
    // console.log(element)
});

// filter
const expensive = products.filter(p => p.price > 50000);
// console.log(expensive)

// find
const affordable = products.find(p => p.price < 50000);
console.log(affordable)

// reduce
const totalPrice = products.reduce((Accumulator, current) => Accumulator + current.price, 0);
console.log(totalPrice)