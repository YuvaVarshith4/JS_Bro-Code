/* 
classList = Element property in JS used to interact
            with an element's list of classes (CSS classes)
            Allows you to make reusable classes for many elements
            across your webpage
add()
remove()
toggle(remove if present, Add if not)
replace(oldClass, newClass)
contains()
*/
 
// const myButton = document.getElementById("myButton");

// add, remove

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// });


// toggle

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });


// replace

// myButton.classList.add("enabled");
// myButton.addEventListener("click", event => {
//     event.target.classList.replace("enabled", "disabled");
// });


// contains

// myButton.classList.add("enabled");
// myButton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😡";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });


// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});


buttons.forEach(button => {
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🥰";
        }
        else{
            event.target.classList.replace("enabled", "disabled"); 
        }
    });
});









