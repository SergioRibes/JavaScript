const prompt = require("prompt-sync")();


//Default Kelvin Temperature
const kelvinTemp = prompt("Enter kelvin Temperature: ")
console.log(`Kelvin temp: ${kelvinTemp}`);


//Converts Kelvin to Celsius
let celsius = kelvinTemp - 273.15

//Converts Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)

//string interpolation
console.log(`Fahrenheit temp: ${fahrenheit}`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//string concatenation
console.log("The temperature is " + fahrenheit  + " degrees Fahrenheit.")

//Converts Celsius to Newton

let newton = celsius*(33/100);
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton`)