//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const decimal = Math.random();
const times21 = decimal * 21
const randomNumber = Math.floor(times21);
console.log("Your luck number is: " + randomNumber);
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const times25 = decimal * 25
const randomLetter = alphabet[Math.floor(times25)]
console.log("Your luck letter is: " + randomLetter)
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const times5 = decimal * 5; 
const randomFood = foods[Math.floor(times5)];
console.log("Your favorite food is: " + randomFood);
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
const times6 = decimal * 5;
const randomStudent = students[Math.floor(times6)];
console.log("...and your favorite student is: " + randomStudent + " .... oh that's favoritism");


/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////