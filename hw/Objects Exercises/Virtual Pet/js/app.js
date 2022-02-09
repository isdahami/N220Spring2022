// Isaac Hamilton
// 2/8/2022
// n220

// Create an object with properties for the x, y, and size of a circle. Add one more property: offsetX

// In the draw function,

     // if the mouse is down - subtract 1 from offsetX, down to a lowest number of zero

    // if the mouse is up - add 1 to offsetX

    //  draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.

// ( use if(mousePressed) { to check if the mouse is down. )

let someObj = {
    x: 20,
    y: 40,
    size: 30,
    offsetX: 3
}

function setup() {
    createCanvas(400, 800);
    background(100);
}

function draw() {
    
}