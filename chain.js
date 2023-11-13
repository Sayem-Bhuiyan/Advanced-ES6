/**
 * data access
 * */ 

const data = [{id: 1, name: 'abul', address: 'Kochu khet'}];
console.log(data[0].address)

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 1, name: 'mac book', price: 165000}
    ]
}

console.log(products.data[1].price)

const user = {
    id: 5001, 
    name: 'Soriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dkaha'
    }
}

const user2 = {
    id: 5002, 
    name: 'pori bibir majar',
    address: {
        city: 'Chitagong',
        country: 'Bangladesh'
    }
}

console.log(user.address.street?.second)
console.log(user2.address.street?.second)

