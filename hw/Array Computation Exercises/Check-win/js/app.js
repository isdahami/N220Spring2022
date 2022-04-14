/*
Isaac Hamilton
4/11/22
N220

Assume that there is a game where if there are three 1's in a row in will count as a "win". 

Create an application that: 

Takes input from the user in a text field
Assumes the input is a set of comma-separated values
Splits the input into an array
Uses a loop to check to see if there are three "1s" in a row in the array
Displays the word "winner" or "not winner" on the document depending on the result
*/
// pulls ids from html
let dvFound = document.getElementById("dvFound");
let txtExample = document.getElementById("txtExample");


function checkWin() {
    // gets input from user
    let userTxt = txtExample.value;
    // splits the user text 
    let myArray = userTxt.split(" ");
   // console.log(myArray)
    
   // set variable to look for win condition 
   let lookingFor = "111";

   // create for loop to go through array 
    for(let i = 0; i < myArray.length; i++) {
        
        // begin if statement to look for win condition
        if(myArray[i] == lookingFor) {
            dvFound.innerHTML = "won"
        } else {
            dvFound.innerHTML = "try again"
        }
    }

    // reset input
    txtExample.value = " ";
}



// if(userTxt == 1,1,1) {
    //     document.getElementById("dvFound").innerHTML = ` ${userTxt} is a winner!`;
    //    } else  {
    //     document.getElementById("dvFound").innerHTML = ` ${userTxt} is NOT a winner, try again!`;
    //    }