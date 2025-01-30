const prompt = require("prompt-sync")();



function yourInput() {
    let input =prompt("Enter your choice ");
    let yourTurn;
    if (input === "rock") {
        yourTurn = 1;
    } else if (input === "scissors") {
        yourTurn = 2;
    } else if (input === "paper") {
        yourTurn = 3;
    }
    return yourTurn;
}

function generateAiTurn() {
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
return play;
}

function game(play, yourTurn) {
    let result;
    if(play === yourTurn) {
        result = "draw";
    }
    
    if(play === 1 && yourTurn === "scissors") {
        result = "You lose!";
    }
    
    if(play === 1 && yourTurn === "paper") {
        result = "You win!";
    }
    
    if(play === 2 && yourTurn === "rock") {
        result = "You win!";
    }
    
    if(play === 2 && yourTurn === "paper") {
        result = "You lose!"
    }
    
    if(play === 3 && yourTurn === "scissors") {
        result = "You win!";
    }
    if(play === 3 && yourTurn === "rock") {
        result = "You lose!";
    }
    console.log(result);
    return result
}


const humanTurn = yourInput();
console.log(humanTurn);

const computerTurn = generateAiTurn()
console.log(computerTurn);

const result = game(computerTurn, humanTurn);
console.log(result);




