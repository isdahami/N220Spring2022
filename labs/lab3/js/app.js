/* var greeting = "hello world"

function setup() {
    createCanvas(400, 400);
}

function draw () {
    let valueX= 50;
    let valueY = 50;
    valueX = valueX + valueY;
    valueY = valueX
    background(220);
        text(greeting, valueX, valueY);
        greeting += "d"
}

*/ 

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220)
    fill("orange")
    circle(400-mouseX, 400-mouseY, 30)
}