/*
arrow functions = a concise way to write function expressions
                  good for simple function that you use only once
                  (parameters) => some code
*/

//initial
// const hello = function(name,age){
//     console.log(`Hello ${name}`);
//     console.log(`You're ${age} years old`);
// }

// hello("Bro",20);

//final
const hello = (name,age) => {console.log(`Hello ${name}`),
                             console.log(`You're ${age} years old`)};
hello("Bro",25);



setTimeout( () => console.log("Hello"), 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
const evenNums = numbers.filter((element) => element % 2 === 0);
const sum = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(evenNums);
console.log(sum);

