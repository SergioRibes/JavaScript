const prompt = require("prompt-sync")();

let yourTurn = eval(prompt("Enter your choice "));
console.log(typeof(yourTurn));

const play = Math.floor(Math.random() * 3 +1);

if(play === 1) {
    console.log("Computer turn: Rock");
}

if(play === 2) {
    console.log("Computer turn: Scissors");
}

if(play === 3) {
    console.log("Computer turn: Paper");
}

if(play === yourTurn) {
    console.log("draw");
}

if(play === 1 && yourTurn === "scissors") {
    console.log("You lose!");
}

if(play === 1 && yourTurn === "paper") {
    console.log("You win!");
}

if(play === 2 && yourTurn === "rock") {
    console.log("You win!");
}

if(play === 2 && yourTurn === "paper") {
    console.log("You lose!")
}

if(play === 3 && yourTurn === "scissors") {
    console.log("You win!");
}
if(play === 3 && yourTurn === "rock") {
    console.log("You lose!");
}



