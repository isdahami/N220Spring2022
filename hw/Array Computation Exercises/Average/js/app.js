/*
Isaac Hamilton
N220
4/7/22

Create an application that:

Takes in a list of comma-separated numbers from the user
Splits that list into an array of numbers
Converts the string version of the numbers into number versions
Loops through the array and sums up the values
Calculates the average of the array
Displays to the user
The average
The sum
Removes the text from the input so the user can type in new numbers

*/

// pulls ids from html
let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");
let dvResultTwo = document.getElementById("dvResultTwo");


function displayAvg() {
    // gets the input from the user
    let userTxt = txtName.value;
    
    // splits the input into an array seperated by commas
    let myArray = userTxt.split(",");
    
    // let the sum be 0
    let sum = 0

    // begin a loop to go through the array  
    for(let i = 0; i < myArray.length; i++) {
        // changes the strings to numbers and adds them together
        sum += Number(myArray[i])
        // puts the sum on the page
        document.getElementById("dvResult").innerHTML = ` ${sum} is the sum`;
    }

    // calculates the average by taking the sum and dividing it by the length of the array 
    var calAvg = sum / myArray.length;
    // puts the average onto the page
    document.getElementById("dvResultTwo").innerHTML = ` ${calAvg} is the average`;


    // console.log(sum);
    // console.log(calAvg);

    // resets the input box so that it's blank
    txtName.value = " ";
}