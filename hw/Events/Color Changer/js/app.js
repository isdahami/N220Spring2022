/*
Isaac Hamilton
N220
4/11/22

Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.
*/

// set the background color, width, height of each div
dvOne.style.backgroundColor = "#969696";
dvOne.style.width = "200px";
dvOne.style.height = "200px";
dvOne.style.float = "left";
dvOne.style.margin = "5px";
dvTwo.style.backgroundColor = "#969696";
dvTwo.style.width = "200px";
dvTwo.style.height = "200px";
dvTwo.style.float = "left";
dvTwo.style.margin = "5px";
dvThree.style.backgroundColor = "#969696";
dvThree.style.width = "200px";
dvThree.style.height = "200px";
dvThree.style.float = "left";
dvThree.style.margin = "5px";
// pull the id from html
let element = document.getElementById("dvOne");
// looking for click and the function call
element.addEventListener("click", itsClicked);



function itsClicked(event){
    // set the bg color 
    event.target.style.backgroundColor = "#db240f";
    // gets the attribute from the html 
    let color = event.target.getAttribute("data-color");
    console.log(color)
    // sets the color by targeting 
    event.target.style.backgroundColor = color;
}

