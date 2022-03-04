// Isaac Hamilton
// n220
// 2/24/2022
/*
Make an application with six divs on the screen, each with a different word.

When any of the divs is clicked,

highlight that div by changing its background color and making the text bold

remove the bold/background highlight from any other divs

add the clicked div's text into a seperate div at the top of the screen
*/

// create variable dv, pull the element by the class name, "dvWord"
var dv =  document.getElementsByClassName("dvWord"); 


// create a for loop
for(let i = 0; i < dv.length; i++) {
    // initial style for [i] 
    dv[i].style.height = "100px";
    dv[i].style.width = "100px";
    dv[i].style.backgroundColor = "#94eb9f"; 
}

 
// highlight function
function highlight() {
    // create a for loop 
    for(let i = 0; i < dv.length; i++) {
        // this styles [i] again 
        dv[i].style.height = "100px";
        dv[i].style.width = "100px";
        dv[i].style.backgroundColor = "#94eb9f"; 
        dv[i].style.margin = "0 0"; 
    } 

    // targets the div to set the styles
    event.target.style.backgroundColor = "red";
    event.target.style.fontWeight = 'bold';
    event.target.style.margin = '0 auto';
}



