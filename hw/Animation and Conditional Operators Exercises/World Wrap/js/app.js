// Isaac Hamilton
// 1/18/2022
//n220

// the start of the circle will be at the x position of 0...aka starting point
let xPos = 0;
// created the var speed which represents the speed of the circle
let speed = 5;

// creating the function setup
function setup() {
    // creating the canvas
    createCanvas(800, 600);
}

// create the function draw to execute the code
function draw() {
    // background color is black
    background(0)
    // create the circle 
    ellipse(xPos, 200, 100, 100);
    
    // the x position is at the speed of 5 which = the X position
    xPos = xPos + speed;

    console.log(speed);
    // if the X position is greater than the width, the circle will come back
    if (xPos > width || xPos < 0) {
        // sends the circle back at -5 speed
       speed *= -1
    }

}