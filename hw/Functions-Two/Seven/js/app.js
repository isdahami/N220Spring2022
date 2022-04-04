// Isaac Hamilton
// 4/4/22
// N220

/*
Is Divisible By Seven
Create an application that with an input and a button. When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not. Use a separate function from the onclick function to discern if it is divisible. This function should return either true if it is divisible  or false if it is not.
*/


// pulls ids from html
let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");


// function that displays if the num is divisible by 7
function calcNum() {
    // calls doMath func
   doMath();
}

// function that calculates the math
function doMath() {
    let userNum = Number(txtName.value);

    // begin if statement to see if num is / by 7
    if (userNum % 7 === 0) {
        document.getElementById("dvResult").innerHTML = ` ${userNum} is divisible by 7`;
    } else {
        document.getElementById("dvResult").innerHTML = ` ${userNum} is NOT divisible by 7`;
    }

    txtName.value = " "; 
}




