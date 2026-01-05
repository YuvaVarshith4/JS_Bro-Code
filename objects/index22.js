/*  
Object = A collection of related properties and/or methods
         Can represent real world objects (people, products, places)
object = {key:value,
          function()}
*/          

const person1 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => {console.log("Hi! I'm Spongebob!")},
}

const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey! I'm Patrick....")}
}


console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();



/*
this = reference to the objects where THIS is used 
       (the object depends on the immediate context)
       person.name = this.name

*/

const person3 ={
    name: "Spongebob",
    favfood: "Hamburgers",
    eat: () => {console.log(`${this.name} is eating ${this.favfood}`)},
}

const person4 ={
    name: "Patrick",
    favfood: "Pizza",
    eat: () => {console.log(`${this.name} is eating ${this.favfood}`)},
}

person3.eat();

