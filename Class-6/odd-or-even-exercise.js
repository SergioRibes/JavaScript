const prompt = require("prompt-sync")();

let yourNumber = prompt("Enter your number:");

function oddOrEven() {
    if (yourNumber % 2 === 0) {
        console.log("Your number is even.");
    }else {
        console.log("Your number is odd.");
    }
}

oddOrEven();