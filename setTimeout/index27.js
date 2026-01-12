/* 
setTimeout() = function in JS that allows you to schedule the execution of 
               function after an amount of time(ms)
               Times are approximate ( varies based on the workload of the JS runtime env.)
               
               setTimeout(callback, delay);
*/

// setTimeout(() => window.alert("Hello"), 4000);

// const timeoutId = setTimeout(() => window.alert("Hello"), 4000);
// clearTimeout(timeoutId); //remove the setTimeout

let timeoutID;
function startTimer(){
    timeoutID = setTimeout( () => window.alert("Hello"), 4000);
    console.log("STARTER");
}

function clearTimer(){
    clearTimeout(timeoutID);
    console.log("CLEARER");
}

