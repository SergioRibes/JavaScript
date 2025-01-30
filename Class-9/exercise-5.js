let array = [0,20,50,40];

function high (arr) {
    let highestNumber = arr[0];
    for(let i=1; i < arr.length; i++) {
        if (arr[i] > highestNumber) {
            highestNumber = arr[i];
        }
    }

    return highestNumber;

}

console.log(high(array));