/* Isaac Hamilton
2/21/2022
n220

3 - Runner Up

Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

Then, write the line of code that displays the runner-up times (second and third place) in two different divs.

*/


// create array of best times
let bestTimes = [3.87 , 9.34 , 16.77 ]


// begin for loop, start at 0, i is less than the length of best times, adds one
for(i = 0; i < bestTimes.length; i++) {
    // get the element id bestTimesZero
    let bestTimesZero = document.getElementById("bestTimesZero");
    // create statement, pulls bestTime 0 from the array and adds the string to the end
    let statement = bestTimes[0] + " 1st";
    // prints it onto the page
    bestTimesZero.innerHTML = statement;
}


for(i = 0; i < bestTimes.length; i++) {
    let bestTimesOne = document.getElementById("bestTimesOne");
    let statement = bestTimes[1] + " 2nd";
    bestTimesOne.innerHTML = statement;
}
for(i = 0; i < bestTimes.length; i++) {
    let bestTimesTwo = document.getElementById("bestTimesTwo");
    let statement = bestTimes[2] + " 3rd";
    bestTimesTwo.innerHTML = statement;
}