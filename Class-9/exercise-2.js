let array = [0,10,20,30];
let newArray = [];

function push (arr, n) {
    for (i=0; i < arr.length; i++) {
        if (arr[i] > n) {
            newArray.push(arr[i]);
        }
        
}
return newArray   
}

console.log(push(array, 10));