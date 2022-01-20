let diameter = 1;

function setup() {
    createCanvas(800, 600);
    console.log(diameter);
}

function draw() {
    background(0);
    

    if(mouseIsPressed){

        if(diameter == 50) {
            diameter = 1;
        } else{
            diameter++;
        }

    }

    console.log(diameter);

    fill(252, 186, 3);
    circle(mouseX, mouseY, diameter);



}

