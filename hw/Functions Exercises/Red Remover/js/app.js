// Isaac Hamilton
// 1/29/2022
// N220

// takes a color as an argument ( you can use new Color(170, 200, 150) )
// sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
// Returns that new color without red

// create function setup, and canvas


// global var nored
let nored;

// setup function
function setup() {
    // var nored is equal to color that is given
    nored = color(170, 200, 150);
    // canvas is created
    createCanvas(400, 600);
}

// draw function
function draw() {
    // removes red
    removeRed(nored);
    // fills the red with no red
    fill(nored);
    circle(100, 200, 50);
}

// remove red function
function removeRed(c) {
    // sets the color of red to 0
    c.setRed(0);
}







