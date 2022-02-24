/* Isaac Hamilton
2/21/2022
n220



2 - Beep Bop

Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element.

*/

// create variable numCounter, get the element by id
let numCounter = document.getElementById("numCounter");

// begin the for loop to generate 1 - 25
for(let i = 1; i < 26; i++) {
    console.log(i)
    // begin an if statement, i is divided by 3 and i is divided by 5.
    if((i % 3 == 0) && (i % 5 == 0)){
        // prints out beepbop if true
        numCounter.innerHTML += "beepbop" + "<br/>";
    }

    // begin an else if, i is divided by 3
    else if(i % 3 == 0) {
        // prints out beep if true
        numCounter.innerHTML += "beep" + "<br/>";
    }

    // begin an else if, i is divided by 5 if true.
    else if(i % 5 ==0) {
        // prints bop if true
        numCounter.innerHTML += "bop" + "<br/>";
    } else {
        numCounter.innerHTML += i + "<br/>";
    }

 
}

