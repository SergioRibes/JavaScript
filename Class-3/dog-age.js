const prompt = require("prompt-sync")();

//User's Age
const myAge = prompt("Enter your age: ")


// First two years 
let earlyYears = 2

earlyYears *= 10.5;

//Rest of its life
let laterYears = myAge - 2;

//dog's age after 1st 2 years
laterYears *= 4

//My age in Dog Years
const myAgeInDogYears = earlyYears + laterYears;


const myName = "Sérgio";
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

