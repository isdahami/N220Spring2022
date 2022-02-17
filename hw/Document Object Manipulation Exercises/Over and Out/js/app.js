// Isaac Hamilton
// 2/16/2022
// n220

/* Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves. */ 


let dvBox = document.getElementById("box");

dvBox.style.width = "100px";
dvBox.style.height = "100px";



document.getElementById("box").onmouseover = function() {mouseOver()};
document.getElementById("box").onmouseout = function() {mouseOut()};

function mouseOver() {
     document.getElementById("box").style.backgroundColor = "black";
 }

function mouseOut() {
    document.getElementById("box").style.backgroundColor = "blue";
 }
