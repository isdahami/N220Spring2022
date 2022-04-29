/*
Isaac Hamilton
4/12/22
N220

FINAL PROJECT

Concentration

Create a version of the 'classic' game of memory (aka concentration). There should be a 4 x 4 grid of cards laid out face-down in front of the user. When clicked, reveal the face of a card. When a second card is tapped, reveal the face of that card as well. If the two cards match, remove them from the game. If they don’t, return them to face-down and allow the user to choose two more.

Requirements

A 4x4 grid of facedown cards

Reveal the value of a facedown card on click

If two revealed cards match, remove them

If two revealed cards do not match, return them to face down

A ‘replay game’ option when the game is over

Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
*/

// creating an array of all the color card options
let cardArray = [
{
    name: 'black',
    img: 'css/images/black.png'
},
{
    name: 'blue',
    img: 'css/images/blue.png'
},
{
    name: 'brown',
    img: 'css/images/brown.png'
},
{
    name: 'green',
    img: 'css/images/green.png'
},
{
    name: 'orange',
    img: 'css/images/orange.png'
},
{
    name: 'purple',
    img: 'css/images/purple.png'
},
{
    name: 'red',
    img: 'css/images/red.png'
},
{
    name: 'yellow',
    img: 'css/images/yellow.png'
},
{
    name: 'black',
    img: 'css/images/black.png'
},
{
    name: 'blue',
    img: 'css/images/blue.png'
},
{
    name: 'brown',
    img: 'css/images/brown.png'
},
{
    name: 'green',
    img: 'css/images/green.png'
},
{
    name: 'orange',
    img: 'css/images/orange.png'
},
{
    name: 'purple',
    img: 'css/images/purple.png'
},
{
    name: 'red',
    img: 'css/images/red.png'
},
{
    name: 'yellow',
    img: 'css/images/yellow.png'
},
]

// randomly sort the cards so that it's random each time
cardArray.sort(() => 0.5 - Math.random())

// pull .game-board from the html and set it as a global variable
let gameBoard = document.querySelector('.game-board');

// variables for the cards that generate an empty array for each given one
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

// this function generates the board
function generateBoard() {
    // start of a for loop that runs through the card array
    for(let i = 0; i < cardArray.length; i++) {
        // create a new element for the img from the array, sets it to the variable card
        var card = document.createElement('img')
        // this sets each card to have the default img, this acts as the back card
        card.setAttribute('src', 'css/images/gradient.png')
        // gives each img an data-id to reference later
        card.setAttribute('data-id', i)
        // this will listen to see if the user clicks on any card, will envoke the flipCard function if so
        card.addEventListener('click', flipCard)
        // appendChild will put the images inside the gameBoard div on the HTML
        gameBoard.appendChild(card)
    }
}

// function that checks to see if the cards match
function checkMatch() {
    // sets an img to the variable cards
    let cards = document.querySelectorAll('img')
    // sets option one and option two = to the card that was chosen by id
    let optionOneId = cardsChosenId[0]
    let optionTwoId = cardsChosenId[1]
    
    // begin an if statement, if the card chosen is = the second card chosen then...
    if(cardsChosen[0] === cardsChosen[1]) {
      console.log('You found a match')
      // if true...the cards will change to a white img
      cards[optionOneId].setAttribute('src', 'css/images/white.png')
      cards[optionTwoId].setAttribute('src', 'css/images/white.png')
      // if true...the event listener will be removed so it can no longer be clicked
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
    //   cardsWon.push(cardsChosen)
    } else {
        // if false...then it will reset the img back to its default img 
      cards[optionOneId].setAttribute('src', 'css/images/gradient.png')
      cards[optionTwoId].setAttribute('src', 'css/images/gradient.png')
      console.log('Sorry, try again')
    }

    // clears the array so it is empty again 
    cardsChosen = []
    cardsChosenId = []
}

// function that flips the card
function flipCard() {
    // gets the attribute from the data id card from the check match function
    var cardId = this.getAttribute('data-id')
    // push the cards from teh card array based on the card id and then gets its name
    cardsChosen.push(cardArray[cardId].name)
    // pushes the card id into an empty array to get the id
    cardsChosenId.push(cardId)
    // adds an img to the page based on the card id it holds
    this.setAttribute('src', cardArray[cardId].img)
    // if the card chosen is = to 2 then it will envoke the check match function 
    if (cardsChosen.length == 2) {
        // timeout after 500 ms
        setTimeout(checkMatch, 500)
    }
}

// function that allows the game to be replayed 
function replayGame() {
    // reloads the page
    location.reload();
}


// envoke the generateBoard to generate the board
generateBoard();






