/*
Isaac Hamilton
4/13/22
N220

This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by.
*/

// pulls from html
let dvOne = document.getElementById("dvOne");
let dvDisplay = document.getElementById("dvDisplay");

// styles the div
dvOne.style.height = "300px";
dvOne.style.width = "300px";

// setting red, green, and blue to start at 0
let red = 0
let green = 0
let blue = 0

// call the function changeColor to execute the code to run to be able to change the colors
changeColor();

function changeColor() {
    // create variable to increase the RGB
    let color = "rgb(" + red + "," + green + "," + blue + ")"
    // style the div to change based on the color variable
    dvOne.style.backgroundColor = color;
    // put it onto the HTML
    dvDisplay.innerHTML = color;

}

function changeRed() {
    // takes the red variable and increases it 
    red += Number(event.target.getAttribute("data-num"));
    changeColor();
}
function changeBlue() {
    // increases blue
    blue += Number(event.target.getAttribute("data-num"));
    changeColor();
}
function changeGreen() {
    // increases green
    green += Number(event.target.getAttribute("data-num"));
    changeColor();
}
