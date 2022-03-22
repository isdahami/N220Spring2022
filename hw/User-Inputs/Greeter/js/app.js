/*
Isaac Hamilton
3/21/22
N220

Greeter

Create an page with an input, and a button. When the button is clicked, output the phrase "Hello {Name}" to the developer console, with {Name} being the value the user put into the input field.

*/

// pulls the id from html
let txtName = document.getElementById("txtName");


// begin function generateName
function generateName() {
    //get the input
    let userName = txtName.value;
    //console.log(userName);
    //show the result of the triple on the document
    let val = `Hello ${userName}!`;    
    console.log(val);
    // resets the input value to blank
    txtName.value = " "; 
}