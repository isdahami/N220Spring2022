/*
Isaac Hamilton
4/12/22
N220

An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.

When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute.
*/


// get class from html
let buttons = document.getElementsByClassName("question");

// begin a for loop to go through the buttons
for(let i = 0; i < buttons.length; i++) {
    // look for the click 
    buttons[i].addEventListener("click", doThing);
}

function doThing(event) {
    // sets the html based on the attribute from the html
    questionAnswer.innerHTML = event.target.getAttribute("data-response");
}
