const PI = 3.14159;
let radius;
let circumference;


// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

// circumference = 2 * PI * radius;

document.getElementById("mySubmit").onclick = function(){
    radius = Number(document.getElementById("myNum").value);
    circumference = 2 * PI * radius;
    console.log(circumference);
    document.getElementById("myh3").textContent = `Your circumference of the circle is :  ${circumference} cm`;
}

