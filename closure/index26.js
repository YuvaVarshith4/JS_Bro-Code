/*
closure = A function defined inside of another function,
          the inner function has access to the variables
          and scope of the outer function.
          Allow for private variables and state maintenance
          Used frequently in JS frameworks: React, Vue, Angular
*/

// EXAMPLE 1
function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

outer();

// EXAMPLE 2

function createcounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased tp ${count}`);
    }

    function getcount(){
        return count;
    }

    return {increment, getcount};
}

const counter = createcounter();

counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getcount()}`);

// EXAMPLE 3

function creategame(){
    let score = 0;

    function increasescore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreasescore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getscore(){
       return score;
    }
   return {increasescore, decreasescore, getscore}; 
}

const game = creategame();

game.increasescore(4);
game.decreasescore(6);

console.log(`The final score is ${game.getscore()}pts`);


