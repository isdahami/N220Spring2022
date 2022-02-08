//global vars
let aou = { x: 0, y: 0 };
// setup function, and create canvas
function setup() {
  createCanvas(400, 400);
}
// draw function
function draw() {
  background(220);
  // if the mouse pressed then aou will equal the position of mouseX and vice versa with aou.y = mouseY
  if(mouseIsPressed) {
    aou.x = mouseX;
    aou.y = mouseY;
  }
  // local var of zah which equals the distance
  let zah = distance( aou, { x: mouseX, y: mouseY });
  // if zah is less than 120, then it will be red else it will be black
  if(zah > 120) {
    stroke("#FF0000");
  } else {
    stroke("#000000");
    //console.log(distance)
  } 
  // line which has arguments
  line(aou.x, aou.y, mouseX, mouseY);
}
// function distance which calls p1 and p2
function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  // return math.sqrt
  return Math.sqrt(dx*dx + dy*dy);
}
