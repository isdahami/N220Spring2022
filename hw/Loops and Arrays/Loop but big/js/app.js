/* Isaac Hamilton
2/21/2022
n220


1- Loop, but big

Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. There should only be one line of code inside of your loop.


let num = [1000, 2000, 3000, 4000, 5000]

for(let i = 0; i <,5; i++) {
    console.log(i);
}

*/ 

let num = [1000, 2000, 3000, 4000, 5000]

for(let i = 0; i < 5001; i++) {
    console.log(i);
}


let numCounter = document.getElementById("numCounter");
let statement = num;
numCounter.innerHTML = statement;