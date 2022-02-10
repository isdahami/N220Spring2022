// Isaac Hamilton
// 2/8/2022
// n220

// Make an object with all the properties for a graphic on the screen - width, height, color, position. Perhaps more. In your create or draw function draw that object to the screen using the data in your object.

// Then, create a function that takes one argument and draws an object to the screen using that argument. Pass your object to that function as an argument, and have the function draw the object to the screen.


// create an object with properties
let someObj = {
    height: 25,
    width: 60,
    color: "#03fcd3"
}; 

// create the function setup with canvas and background
function setup() {
    createCanvas(400, 600);
    background(100);
}

// draw function
function draw() {
    // fills the obj with the color prop I selected
    fill(someObj.color);
    background(100);
    // calls the drawObj function with the argument of the object
    drawObj(someObj);
}

// drawObj function with the argument obj
function drawObj(obj) {
    // creates a rect at mouseX, mouseY, with the obj height, and obj width
    rect(mouseX, mouseY, obj.height, obj.width);

}





