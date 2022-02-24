/* Isaac Hamilton
2/21/2022
n220


1- Loop, but big

Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. There should only be one line of code inside of your loop.


*/ 


// create array
let num = [1000, 2000, 3000, 4000, 5000]

// begin the for loop, start at 0, i is less than 5001, adds one until 5001
for(let i = 0; i < 5001; i++) {
    console.log(i);
}

// gets element "numCounter"
let numCounter = document.getElementById("numCounter");
// create statement, num
let statement = num;
// prints out the result onto the page
numCounter.innerHTML = statement;