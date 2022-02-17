// Isaac Hamilton
// 2/16/2022
// n220

/* Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves. */ 

// creating the box
let dvBox = document.getElementById("box");

// styling 
dvBox.style.width = "100px";
dvBox.style.height = "100px";
dvBox.style.backgroundColor = "blue";



document.getElementById("box").onmouseover = function() {mouseOver()};
document.getElementById("box").onmouseout = function() {mouseOut()};

// function that happens when the mouse is over the box, changes it to black
function mouseOver() {
     document.getElementById("box").style.backgroundColor = "black";
 }

 // function that happens when the mouse is not over the box, changes it to blue
function mouseOut() {
    document.getElementById("box").style.backgroundColor = "blue";
 }
