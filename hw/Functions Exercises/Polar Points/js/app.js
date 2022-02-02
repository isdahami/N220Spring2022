// Isaac Hamilton
// 1/29/2022
// N220


// In addition to your setup() and draw() calls, add a new function named polarPoint()
// Add one argument to polar point (r)
// In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
// Create a Y variable, set it to the result of Math.cos(mouseX);
// Finally, at the end of the function, write return createVector(x,y); 



// setup and creating the canvas
function setup() {
    createCanvas(400, 600);
}

// draw function
function draw() {
    // bg color
    background(150)
    // res variable is equal to the function -> polarPoint, 10 = r
    let res = polarPoint(10);
    // translate x,y 100 100
    translate(100, 100);
    // draws the circle based on res x and res y with a radius of 10
    circle( res.x, res.y,10);
    console.log(res)
}


// polarPoint function, takes r as an arguement
function polarPoint(r) {
    // x is equals to radius * sin of mouseX
    let x = r * Math.sin(mouseX);
    // y is equals to cos of mouseX
    let y = Math.cos(mouseX);
    // vectors of x,y
    return createVector(x,y); 
}