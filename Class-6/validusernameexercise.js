const prompt = require("prompt-sync")();

let yourNumber = prompt ("Enter your number:");
 
let randomNumber = Math.random() * 100;

function finalResult(yourNumber, randomNumber) {
    return yourNumber * randomNumber;
}

let result = finalResult(yourNumber,randomNumber);
console.log(result);
 
console.log(yourNumber);
console.log(randomNumber);