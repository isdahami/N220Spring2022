// Isaac Hamilton
// 2/8/2022
// n220

// Take your world wrap assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function. 

let objPuck = {
    x: 100,
    size: 30,
    colorLeft: "#b00707",
    colorRight: "#0d04bf"
}

function setup() {
    createCanvas(400, 300);
}


function draw() {
    background(0);

    if (mouseX > 200) {
        fill(objPuck.colorLeft);
        console.log("Changing color");
    } else {
        fill(objPuck.colorRight);
        console.log("Changing color");
    }
    circle(mouseX, mouseY, objPuck.size);
}