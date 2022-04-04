// Isaac Hamilton
// 4/4/22
// N220

/*
Make Random

Create a function that generates and returns a random whole number between 0 and 10. 
Write a web page to test it by having a button that, when clicked runs a function that: - Uses that function to generate a random number. - Displays that number on the screen. Your final application should have two functions - one to make the random number, and one to handle the click.
*/

// pulls ids from html
let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");

// function that displays the number
function displayNum() {
    // calls genNum func
    genNum();
} 

// function that generates the number randomly 
function genNum() {
    document.getElementById("dvResult").innerHTML = Math.floor(Math.random() * 11);
}

