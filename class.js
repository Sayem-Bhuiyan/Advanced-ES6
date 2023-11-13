const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 53000},
    {id: 4, name: 'mac', price: 153000},
]

// has some properites , method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;

    }
    speak(talk){
        console.log(`talking about ${talk}`);
    }
}

// const lenovo = new Product('le le lenovo');
// console.log(lenovo)
// lenovo.speak('oba kita kau')

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math');
    }
}

const tapan = new Teacher('Tapon sir', 'Physics');
console.log(tapan)

const rasid = new Teacher('Rasid', 'Englidh');
console.log(rasid)