// Isaac Hamilton
// 2/8/2022
// n220

// Take your world wrap assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function. 


// create an object
let objPuck = {
    x: 100,
    size: 30,
    colorLeft: "#b00707",
    colorRight: "#0d04bf"
}

// setup function with canvas
function setup() {
    createCanvas(400, 300);
}

// draw function
function draw() {
    background(0);
// if mouseX is less than 200
    if (mouseX > 200) {
        // fill with the objects prop of color left
        fill(objPuck.colorLeft);
        console.log("Changing color");
    } else { // else fill the objects prop of color right
        fill(objPuck.colorRight);
        console.log("Changing color");
    }
    // draw circle at mouseX and Y, with the radius of the objPuck size
    circle(mouseX, mouseY, objPuck.size);
}