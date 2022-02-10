// Isaac Hamilton
// 2/10/2022
// n220

let tvObj = {
    tvSize: 150,
    tvPos: 100,
    screenSize: 250,
    screenPos: 150,
    tvColor: "#000000", 
    screenColor: "#857676",
    x1: 250,
    y1: 50,
    x2: 250,
    y2: 50
}

let telly = {
    tvSize: 150,
    tvPos: 300,
    screenSize: 250,
    screenPos: 150,
    tvColor: "#000000", 
    screenColor: "#857676",
    x1: 250,
    y1: 150,
    x2: 250,
    y2: 350
}

function setup() {
    createCanvas(500, 600);
}

function draw() {
    drawTV(tvObj);
    drawTV(telly);
}

function drawTV(television) {
    fill(television.tvColor);
    fill(television.screenColor);
    line(television.x1, television.x2, television.x2, television.y2);
    rect(television.tvSize, television.tvPos, television.screenSize, television.screenPos);
}