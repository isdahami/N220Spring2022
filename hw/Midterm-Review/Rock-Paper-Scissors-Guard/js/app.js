// Isaac Hamilton
// n220
// 2/24/22

/*
Rock Paper Scissors (Guard)

Make a game of rock-paper-scissors using DIVs as the buttons to select one of four options: rock, paper, scissors, and guard.

Add a space for a score display on the screen. Start the score at zero. (this will be tied to an application/global variable)

When any of the divs are clicked, run the logic for this game -

Generate a random move for the computer (rock/paper/scissors)
If the play chose guard
   Skip the RPS logic, and subtract half a point from their score
Otherwise, run the RPS logic
   Check to see if the player won against the computer
        If so, add one to their score
    Check if the player lost
        If so subtract one from score
    Check for tie
        If so, do nothing to score
Once the logic is complete,
    show the results of the round: You chose X, computer chose Y. 
    update the score
*/

// score 
// gets element by i
let dvScore = document.getElementById("score");
// style
dvScore.style.backgroundColor = "red"
dvScore.style.height = "100px";
dvScore.style.width = "100px";
dvScore.style.margin = "10px";

// display choice
let dvChoice = document.getElementById("displayChoice")
// style
dvChoice.style.backgroundColor = "#dbce39"
dvChoice.style.height = "100px";
dvChoice.style.width = "150px";
dvChoice.style.margin = "10px";




// divs for rock, paper, scissors, and guard
var dv =  document.getElementsByClassName("dvRPSG");
for(let i = 0; i < dv.length; i++) {
    // styles the divs
    dv[i].style.height = "100px";
    dv[i].style.width = "100px";
    dv[i].style.backgroundColor = "#94eb9f"; 
    dv[i].style.margin = "10px";
}

// array for play
let play = ["Rock", "Paper", "Scissors", "Guard"]

// global var for score to start at 0
let score = 0;


// function for computer
function computer() {
    // math.floor rounds number, math random by default is 0-1, * 3 to get 0-2 range
    let random = Math.floor(Math.random() * 3);
    Math.floor(Math.random() * 3);
    
    // returns play and random
    return play[random];
    
}


// function for play game
function playGame() {
    // local var for calling computer function
    let computerChoice = computer();
    
    console.log(computerChoice);
   // console.log(event.target)

   // begin if statement, targets the inner html rock
    if (event.target.innerHTML == "Rock") {
        console.log("Rock");
        if (computerChoice == "Paper") {
            score = score - 1;
        } else if (computerChoice == "Scissors") {
            score = score + 1;
        } 
    } else if (event.target.innerHTML == "Paper") {
        console.log("Paper"); 
        if (computerChoice == "Rock") {
            score = score + 1;
        } else if (computerChoice == "Scissors") {
            score = score - 1;
        }
    } else if (event.target.innerHTML == "Scissors") {
        console.log("Scissors");
        if (computerChoice == "Paper") {
            score = score + 1;
        } else if (computerChoice == "Rock") {
            score = score - 1;
        }
    } else if (event.target.innerHTML == "Guard") {
        console.log("Guard");
        score = score - .5;
    } 

    // prints score
    dvScore.innerHTML = "Score: " + score;
    // prints the player choice
    dvChoice.innerHTML = "player: " + event.target.innerHTML + "<br/>";
    // prints the computers choice
    dvChoice.innerHTML += "computer: " + computerChoice;
   
}