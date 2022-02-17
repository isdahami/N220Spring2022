// Isaac Hamilton
// 2/14/2022
// n220

/* Write the markup and JS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div its clicked, it increases its size by 10% every time.

Hints:

Make a variable to store the height and width of the object
to set the height and width, set to varName + "px"
10% is .1 bigger,or 1.1 * the original size */ 


let dvBox = document.getElementById("box");

dvBox.style.backgroundColor = "green"
dvBox.style.width = 100 + "px";
dvBox.style.height = 100 + "px";

document.body.appendChild(dvBox);
    var boxHeight = dvBox.style.height;
    var boxWidth = dvBox.style.width;

function increaseBox() {
    boxHeight = parseInt(boxHeight) * 1.1 + "px";
    boxWidth = parseInt(boxWidth) * 1.1 + "px";
    dvBox.style.height = boxHeight;
    dvBox.style.width = boxWidth;
    document.body.appendChild(dvBox);
}