// Isaac Hamilton
// 2/8/2022
// n220

// Make an object with all the properties for a graphic on the screen - width, height, color, position. Perhaps more. In your create or draw function draw that object to the screen using the data in your object.

// Then, create a function that takes one argument and draws an object to the screen using that argument. Pass your object to that function as an argument, and have the function draw the object to the screen.



let someObj = {
    height: 25,
    width: 60,
    color: "#03fcd3"
}; 

function setup() {
    createCanvas(400, 600);
    background(100);
}

function draw() {
    fill(someObj.color);
    background(100);
    //rect(mouseX, mouseY, someObj.height, someObj.width);
    drawObj(someObj);
}

function drawObj(obj) {
    rect(mouseX, mouseY, obj.height, obj.width);

}





