// Isaac Hamilton
// 1/28/2022
// N220

// create the canvas
function setup() {
    createCanvas(800, 600);
}
// calls the function drawCar three times into the composition
function draw() {
    drawCar(20, 60);
    drawCar(150, 200);
    drawCar(300, 400);
}

// draw car function with the parameters of x,y
function drawCar(x,y) {
    // draw a car
    fill(66, 135, 245);
    rect(x, y, 200, 60);
    fill(0, 0, 0);
    circle(x+20, y+70, 40);
    circle(x+190, y+70, 40);
}



