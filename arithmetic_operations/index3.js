let students = 30;

// augemented assignment operators

students += 1;
students -= 1;
students *= 2;
students /= 2;
students **= 2;  /* Power */
let extrastudents = students%3;

// incremented and decremented operators

students++;
students--;

console.log(students);

/* precedence

  a) parenthisis ()
  b) exponents
  c) multiplication & division & modulo
  d) addition & subtraction
 
*/

let result = 1 + 2 * 3 + 4 ** 2;
let result1 = 12 % 5 + 8 / 2;
let result2 = 6 / 2 ** 7;
console.log(result);
console.log(result1);
console.log(result2);