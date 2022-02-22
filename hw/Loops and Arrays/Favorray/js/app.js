/* Isaac Hamilton
2/21/2022
n220


4 - Favorray

Create a string array. List at least five of your favorite things in that array.

Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing. For instance, one line in the div might say, "Pizza, is one of my favorite things."

*/


// array with my fav things
let fav = [" burritos", " pineapples", " sleep", " gaming", " reading"];
// console.log(fav);

for(let i = 0; i < fav.length; i++) {
    console.log(i);
    let favThingsZero = document.getElementById("favThingsZero");
    let statement = fav[0] + ", is one of my favorite things" 
    favThingsZero.innerHTML = statement;
}

for(let i = 0; i < fav.length; i++) {
    console.log(i);
    let favThingsOne = document.getElementById("favThingsOne");
    let statement = fav[1] + ", is one of my favorite things" 
    favThingsOne.innerHTML = statement;
}

for(let i = 0; i < fav.length; i++) {
    console.log(i);
    let favThingsTwo = document.getElementById("favThingsTwo");
    let statement = fav[2] + ", is one of my favorite things" 
    favThingsTwo.innerHTML = statement;
}

for(let i = 0; i < fav.length; i++) {
    console.log(i);
    let favThingsThree = document.getElementById("favThingsThree");
    let statement = fav[3] + ", is one of my favorite things" 
    favThingsThree.innerHTML = statement;
}

for(let i = 0; i < fav.length; i++) {
    console.log(i);
    let favThingsFour = document.getElementById("favThingsFour");
    let statement = fav[4] + ", is one of my favorite things" 
    favThingsFour.innerHTML = statement;
}

