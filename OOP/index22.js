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

//------- !!! arrow operator doesn't work for this !!! -------

const person3 ={
    name: "Spongebob",
    favfood: "Hamburgers",
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)},
}

const person4 ={
    name: "Patrick",
    favfood: "Pizza",
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)},
}

person3.eat();
person4.eat();


console.log(this); //window acts as an object, this is for that window



/* 
constructor = special method for defining the properties and 
              methods of objects

              use case: instead of creating many no.of objects 
*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Ford", "Mustang", 2024, "Dark Horse Blue");
const car2 = new Car("Chevrolet", "Camaro", 2025, "yellow");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);


/* 
class = (ES6 feature) provides a more structured and cleaner way to
        work with objects compared compared to traditional constructor fucntion.
        e.g., static keyword, encapsulation, inheritance 
*/

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt", 19.99);

product1.displayProduct();
const salesTax = 0.05;
const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);


/* 
static = keyword that defines properties or methods that belong to a class
         itself rahter than the objects created from that class
         (class owns anything static, not the objects)
*/

class MathUtil{
    static PI = 3.14159;
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI); // we don't need any object to access, static objects can be accessed by the class itself
console.log(MathUtil.getCircumference(4));
console.log(MathUtil.getArea(4));


class User{
    static usercount = 0;
    constructor(username){
        this.username = username;
        User.usercount++;
    }
    static getUsercount(){
        console.log(`There are ${User.usercount} user online`);
    }
    sayHi(){
       console.log(`Hello, my username is ${this.username}`); 
    }
}

const user1 = new User("Spongebob");
const user2 = new User("patrick");

console.log(user1.username);
console.log(User.usercount); //as it's static, it can be accessed by class

user1.sayHi();
user2.sayHi();

User.getUsercount();


/* 
inheritance = allows a new class to inherit properties and methods 
              from an existing class (parent -> child)
              helps with code reusability
*/


class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    static name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    static name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);

fish.alive = false;
console.log(fish.alive);

rabbit.eat();
fish.sleep();

rabbit.run();
fish.swim();


/* 
super = keyword is used in classes to call the constructor or access
        the properties and methods of a parent(superclass)
        this = this object
        super = the parent
*/

class Animals{
    constructor(names, age){
        this.names = names;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.names} moves at a speed of ${speed}kph`);
    }
}

class Bird extends Animals{

    constructor(names, age, flyspeed){
        super(names, age);
        this.flyspeed = flyspeed;
    }

    fly(){
        console.log(`This ${this.names} is flying`);
    }

}

class Monkey extends Animals{

    constructor(names, age, jumpspeed){
        super(names, age);
        this.jumpspeed = jumpspeed;
    }

    climb(){
        console.log(`This ${this.names} is climbing`);
    }
}

const Eagle = new Bird("Eagle", 49, 60);
const Ape = new Monkey("Ape", 25, 15);

console.log(Eagle.age);
console.log(Ape.jumpspeed);

Ape.climb();
Eagle.fly();

Ape.move(45);



/*
getter = special method that makes a property readable
setter = special methos that makes a property writeable

validate and modify a value when reading/writing a property
*/

// example 01

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;  //_width is private property, it must not be touched
        }
        else{
            console.error("Width must be a positive number")
        }
    }

    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.error("Height must be a positive number")
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}

// const rectangle = new Rectangle(-1000000, "Burger");
// console.log(rectangle.width);

const rectangle = new Rectangle(4,6);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);  // You can additional logic using getters

rectangle.width = 5;
rectangle.height = 7;


//example 02

class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfirstname){
        if(typeof newfirstname === "string" && newfirstname > 0){
            this._firstname = newfirstname;
        }

        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname > 0){
            this._lastname = newlastname;
        }

        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }

        else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstname(){
        return this._firstname;
    }
    get firstname(){
        return this._lastname;
    }
    get fullname(){
        return this._firstname + " " + this._lastname;
    }
    get age(){
        return this._age;
    }
}

// const person = new Person(420, 69, "pizza");

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.age);


const person = new Person("Spongebob", "Squarepants", 30);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);




