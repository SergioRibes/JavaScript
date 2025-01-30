let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === "sleepy" && tirednessLevel > 8) {
    console.log("Time to sleep!")
} else {
    console.log("Not bed time yet!")
}

if (!(mood === "sleepy") || tirednessLevel > 8) {
    console.log("Time to sleep!")
} else {
    console.log("Not bed time yet!")
}

if(mood !== "sleepy" && tirednessLevel > 8) {
    console.log("Time to sleep!")
} else {
    console.log("Not bed time yet!")
}