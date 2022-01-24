// Isaac Hamilton
// 1/18/2022
//n220

let xPos = 100;
let yPos = 0;


function setup() {
    createCanvas(400, 300);
}

function draw () {
    background(0)

    console.log(mouseX);
    if (mouseX > 200) {
        fill(176, 7, 7);
        console.log("Changing color");
    } else {
        fill(13, 4, 191);
        console.log("Changing color");
    }

    circle(mouseX, mouseY, 30);
}