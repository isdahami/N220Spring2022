// Isaac Hamilton
// 2/14/2022
//n220

/* Put a div on the page. When the div is clicked, append the text "mc" to whatever is in its innerHTML. After 3 clicks, the div will show "divdivdiv" */


let dvBox = document.getElementById("box");

dvBox.innerHTML = "mc";
dvBox.style.backgroundColor = "#ebcf34";
dvBox.style.width = "100px";
dvBox.style.height = "100px";

function newBox(){
    let newEl = document.createElement("div");

    newEl.innerHTML = "div";
    newEl.style.backgroundColor = "green"
    newEl.style.width = "50px";
    newEl.style.float = "left";

    document.body.appendChild(newEl);
}
