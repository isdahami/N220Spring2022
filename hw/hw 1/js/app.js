// Isaac Hamilton
// 1/18/2022
//n220

// creating the function
function setup() {
    //variables
    var busYellow = "#f2e527";
    var busWheels = 100;

    // creating the canvas 
    createCanvas (800,165);
    // color of the background
    background(136, 242, 212);


    // bus rectangle
    fill(busYellow);
    // strokeWeight(0)
    rect(80, 60, 220, 40);
    
    // glass of the bus
    fill(120, 178, 179);
    strokeWeight(1)
    rect(80, 40, 180, 30);


    // street 
    fill(0,0,1);
    rect(0, 120, 800, 40);
    // yellow street line
    stroke(242, 255, 0);
    line(1000, 140, 5, 140);
    // wheels for the bus
    fill(0, 0, 0);
    stroke(54, 54, 54);
    strokeWeight(3);
    circle(busWheels,100, 30);
    circle(280,100, 30);

    
    
}