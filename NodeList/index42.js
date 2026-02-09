/* 
NodeList = Static collection of HTML elements by (id, class, element)
           Can be created by using querySelectorAll()
           Similar to an array, but no (map, filter, reduce)
           NodeList won't update to atomatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "🥵";
// });

// CLICK event listener

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";
//     });
// });

// MOUSEOVER + MOUSEOUT event listener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//     });
// });

// ADD NEW ELEMENT

const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton); // STEP 3

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})

