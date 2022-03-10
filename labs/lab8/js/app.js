// Isaac Hamilton
// n220
// 3/10/22

/*
Vowel Remover

Strings are arrays - which means that you can do something like:
let word = "Potato";
let char = word[1];

console.log(char); // will be 'o'

Using this knowledge, write an application that takes a string input from a user, copies all the non-vowels to a new string, and outputs the result on the document.
*/


// pulls id from HTML
let txtName = document.getElementById("txtName");
let inputResult = document.getElementById("inputResult");

let userInput = "";

// function 
function generateVowel() {
    // get the users input
    userInput = "";
    txtName = document.getElementById("txtName").value;
    
    // splits the txtName and each letter into an array like so ['h', 'e', 'l', 'l', 'o']
    txtName = txtName.split("");

    // begin the for loop to run through txtName
    for(i = 0; i < txtName.length; i++) {
        // checks txtName for a,e,i,o,u
        if (txtName[i] == "a" || txtName[i] == "e" || txtName[i] =="i" || txtName[i] =="o" || txtName[i] =="u") {
            // adds userInput to txtName[i]
            userInput += txtName[i]; 
        }
    }

    // spits out the reult onto the page
    inputResult.innerHTML = userInput;
}


