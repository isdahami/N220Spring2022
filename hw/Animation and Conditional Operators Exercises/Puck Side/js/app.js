// Isaac Hamilton
// 1/18/2022
//n220

// create two variables, one for the X position and the other for the Y position
let xPos = 100;
let yPos = 0;

// create the setup for the function
function setup() {
    // create the canvas 400x300
    createCanvas(400, 300);
}
// create the draw function
function draw () {
    // background color is black
    background(0)
    // create the if statement for the position of the mouse
    console.log(mouseX);
    // if the position of the mouse is LESS than 200 then it will turn RED
    if (mouseX > 200) {
        fill(176, 7, 7);
        console.log("Changing color");
        // ELSE it will turn BLUE
    } else {
        fill(13, 4, 191);
        console.log("Changing color");
    }
    // represents the circle, the mouse controls the position of it
    circle(mouseX, mouseY, 30);
}