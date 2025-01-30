// generate race number
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = "true";

let age = 18

if (earlyRegistration === "true" && age > 18) {
    console.log(`Your race starts at 9h30, here is your race number: ${raceNumber + 1000}`);
} else if (earlyRegistration === "false" && age > 18) {
    console.log(`Your race starts at 11h00, here is your race number: ${raceNumber}`);
} else if (age < 18) {
    console.log(`Your race starts at 12h30, here is your ${raceNumber}`);
} else {
    console.log("Stop by registration desk.");
}