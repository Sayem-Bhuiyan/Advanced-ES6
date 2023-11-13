class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}


const person1 = new Person('Sayem', 21);
console.log(person1)
person1.sleep()

const person2 = new Person('Akash', 22);
person2.sleep()

const lazy = person2.sleep;
lazy();