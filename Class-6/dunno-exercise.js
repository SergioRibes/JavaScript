const prompt = require("prompt-sync")();

let yourUsername = prompt ("Enter your username:");

function validUsername() {
    if (yourUsername.length < 1) {
        console.log("O nome de utilizador inserido é inválido.");
    }else{
        console.log(`O nome de utilizador ${yourUsername} é válido.`);
    }
}

validUsername();