/*
Isaac Hamilton
3/21/22
N220

Number guesser (easier)

Create a number guessing name, using an input and a button to gather a number.
The number to be guessed should be a hard-coded whole number between 1 and 20.
Tell the user if the number is too high, equal to, or too low than a number you have hard-coded in your application.
Remove the text in the input when the user clicks the button.
*/

let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");

function generateGuess() {
    let num = 12; 
    let userNum = Number(txtName.value);
    
    if (userNum > num) {
        document.getElementById("dvResult").innerHTML = "too high!";
    } else if (userNum < num) {
        document.getElementById("dvResult").innerHTML = "too low!";
    } else if(userNum == num) {
        document.getElementById("dvResult").innerHTML = "correct!";
    }
}
