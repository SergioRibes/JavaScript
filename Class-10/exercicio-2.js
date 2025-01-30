let tenNumbers = [11,2,3,4,5,6,7,8,9,10];

let newArray = [];

function low (arr) {
    let lowestNumber = arr[0];
    for(let i=1; i < arr.length; i++) {
        if (arr[i] < lowestNumber) {
            lowestNumber = arr[i];
        }
    }

    return lowestNumber;

}

console.log(low(tenNumbers));