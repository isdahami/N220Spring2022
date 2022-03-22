/*
Isaac Hamilton
3/21/22
N220

Tip calculator

Make a page with one input and one button (Seeing a trend?). When the button is clicked (assuming the value typed into the input is numerical), calculate both the tip and the full value of the bill to be paid. Output both to the console, formatted as such:

"Tip: $X. Total: $X" 
*/

// pulls the id txtName from html
let txtName = document.getElementById("txtName");


// begin function
function generateNum() {
    //get the input
    let userNum = Number(txtName.value);
    // generates tip, takes the total(userNum) and multiplies it by 1.20 to get a 20% tip
    var tip = userNum * .2;
    //console.log(tip)
    
    
    //show the result of the triple on the document
    let userTotal = `Total: $${userNum} Tip: $${tip}`; 
    console.log(userTotal);
    // resets input value
    txtName.value = " "; 
}