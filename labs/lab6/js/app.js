/*
Week 6 Class Exercises
- Write a loop that prints to the console the numbers 1 to 10, counting forward

- Write a loop that prints to the console the numbers 10 to 1, counting backwards

- Write a loop that prints to the console the first 20 numbers of the Fibonacci sequence ( starting at zero, the next number in the sequence is the sum of the previous two numbers: 0, 1, 1, 2, 3, 5, 8, 13.... and so on 

- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that reverses the array. Log the reversed array out to the console.

- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that capitalizes the words in the array using the .toUpperCase() string method. Log the modified array out to the console.

- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that generates the string "Indiana! Yeah! University! Yeah! Purdue! Yeah! Indianapolis! Yeah!". Log the string out to the console.
*/

// Exercise #1
/*
for(let i = 0; i < 11; i++) {
    console.log(i);
}
*/

// Exercise #2
/*
for(let i = 10; i >= 0; i--) {
    console.log(i);
}
*/

// Exercise #3

let num = [0, 1];
let num2 = 0;


for(let i = 0; i < 21; i++){
    num2 = num[i] + num[i + 1];
    num.push(num2);
    console.log(num);
}


// Exercise #4
/*
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ] 

for(let i = words.length - 1; i >= 0; i--) {
    let itemAtIndex = words[i];
    console.log(itemAtIndex);
    
}
*/

// Exercise #5
/*
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ]

for(let i = 0; i < words.length; i++) {
    let uppercased = words.map(words => words.toUpperCase());
    console.log(uppercased);
}
*/


// Exercise #6
/*
let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ]
let wordTwo = "Yeah!";

for(let i = 0; i < words.length; i++){
    wordTwo = words[i] + wordTwo[i];
    words.push(wordTwo);
    console.log(words);
}

*/