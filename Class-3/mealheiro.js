const prompt = require("prompt-sync")();

// Amount of Colombian Pesos
const colombianPesos = prompt("Enter Colombian Pesos value:");
 
//Amount of Brazilian Reais
const brazilianReais = prompt("Enter Brazilian Reais value:");

//Amount of Peruvian Soles
const peruvianSoles = prompt("Enter Peruvian Soles value");

//Foreign currency converted to US dollars
let usDollars = (0.054 * colombianPesos) + (0.19 * brazilianReais) + (0.26 * peruvianSoles);
console.log(`You have ${usDollars} US dollars worth in foreign currency.`);