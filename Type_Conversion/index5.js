// ---------------------------------------------------------------------------------------------------------

// function onTimerEnd() {
//     let age = window.prompt("How old are you?");
//     age = Number(age);
//     age += 1;
//     console.log(age);
//     document.getElementById("myh1").textContent = `By next year you'll be ${age}`;
// }

// setTimeout(onTimerEnd, 5000);

// ---------------------------------------------------------------------------------------------------------


let x = "chicken";
let y = "chicken";
let z = "chicken";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // output : NaN (Not a Number) 'number'
console.log(y, typeof y); // chicken string
console.log(z, typeof z); // true 'boolean'