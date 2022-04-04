/*
Isaac Hamilton
4/4/22
N220

Cleanup

Make a function that takes a string, and removes every instance of "#" from the string, and returns the "cleaned up" version without the hashtags/octothorpes. 

Write a web page to test the function - one button and input, and one div. When the button is pressed, take the input, use the function to remove the hashtags, and show the result string on the page.

*/

// pull ids from html
let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");


// function that displays the text
function displayTxt() {
    // calls the removeHash function
    removeHash();
}

// function that removes hashes from the input
function removeHash() {
    // gets the value
    let userTxt = txtName.value;

    // puts the input on the page, also splits the string 
   document.getElementById("dvResult").innerHTML = userTxt.split("#");
}