/* Isaac Hamilton
2/21/2022
n220



2 - Beep Bop

Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element.

*/

let numCounter = document.getElementById("numCounter");

for(let i = 0; i < 26; i++) {
    numCounter.innerHTML += i;
    console.log(i)
}

