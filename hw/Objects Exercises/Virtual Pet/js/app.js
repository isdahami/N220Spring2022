// Isaac Hamilton
// 2/8/2022
// n220

// Create an object with properties for the x, y, and size of a circle. Add one more property: offsetX

// In the draw function,

     // if the mouse is down - subtract 1 from offsetX, down to a lowest number of zero

    // if the mouse is up - add 1 to offsetX

    //  draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.

// ( use if(mousePressed) { to check if the mouse is down. )


// Created an object name someObj
let someObj = {
    x: 20,
    y: 40,
    size: 30,
    offsetX: 3
}

// create the function setup
function setup() {
    createCanvas(400, 800);
    background(100);
}

// created the draw function
function draw() {
    background(100);
    // sets the Object x so that it is equal to mouseX
    someObj.x = mouseX
    // sets the Object y so that it is equal to mouseY
    someObj.y = mouseY 
    // calls the offset function
    offset();
    // draws the circle, the Obj.x is being added to the someObj.offsetX
    circle((someObj.x + someObj.offsetX), someObj.y, someObj.size);
}

// this is the offset function
function offset() {
    // if the mouse is pressed,
    if(mouseIsPressed == true) {
        // the offsetX is not equal to 0 it will subtract one
        if(someObj.offsetX != 0) {
            someObj.offsetX = someObj.offsetX - 1
        } 
    } else { // else the offsetX will add 1
        someObj.offsetX = someObj.offsetX + 1
    }
}