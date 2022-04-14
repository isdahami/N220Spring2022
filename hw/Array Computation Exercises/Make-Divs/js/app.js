/*
Isaac Hamilton
N220
4/7/2022


Given the array

let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];

Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code.
*/

// pulls id from html
let dvDisplay = document.getElementById("dvDisplay");

// 2d array 
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


// function that displays the divs
function display() {

    // begin for loop to go through the array
    for(var i = 0; i < objects.length; i++){
        // create new div
        let newEl = document.createElement("div");
        // set background color
        newEl.style.backgroundColor = objects[i].color;
        // set height of div
        newEl.style.height = objects[i].height + "px";
        // set width of div
        newEl.style.width = objects[i].width + "px";
        // append the child
        dvDisplay.appendChild(newEl);
    }
}