// Isaac Hamilton
// 2/14/2022
//n220

/* Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML. After 3 clicks, the div will show "divdivdiv" */

// creating the box
let newEl = document.createElement("div");

// styling 
newEl.innerHTML = "mc";


document.body.appendChild(newEl);

newEl.addEventListener("click", function() {
    newEl.innerHTML += "div";
})